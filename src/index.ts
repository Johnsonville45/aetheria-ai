import { Client, GatewayIntentBits, Interaction } from 'discord.js';
import OpenAI from 'openai';
import {
  DISCORD_TOKEN,
  AI_CHANNEL_ID,
  OPENAI_API_KEY,
  OPENAI_MODEL,
  MAX_INPUT_CHARS
} from './config.js';
import { commands } from './commands.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

function validateInput(text: string) {
  if (!text || !text.trim()) return 'Input is empty';
  if (text.length > MAX_INPUT_CHARS) return `Input is too large (max ${MAX_INPUT_CHARS} chars)`;
  return null;
}

async function doChat(prompt: string) {
  const res = await openai.chat.completions.create({
    model: OPENAI_MODEL,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 1500
  });
  const content = res.choices?.[0]?.message?.content;
  return content ?? null;
}

client.once('ready', () => {
  console.log(`Aetheria AI logged in as ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    // Optional channel restriction
    if (AI_CHANNEL_ID && interaction.channelId !== AI_CHANNEL_ID) {
      await interaction.reply({ content: `Please use the designated AI channel <#${AI_CHANNEL_ID}> for this command.`, ephemeral: true });
      return;
    }

    const name = interaction.commandName;

    if (name === 'ping') {
      const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
      // @ts-ignore
      const latency = sent.createdTimestamp - interaction.createdTimestamp;
      await interaction.editReply(`Pong! WS: ${Math.round(client.ws.ping)}ms | RTT: ${latency}ms`);
      return;
    }

    if (name === 'botinfo') {
      await interaction.reply({
        embeds: [
          {
            title: 'Aetheria AI',
            description: 'An AI assistant powered by OpenAI',
            fields: [
              { name: 'Node', value: process.version, inline: true },
              { name: 'Model', value: OPENAI_MODEL, inline: true }
            ]
          }
        ]
      });
      return;
    }

    if (name === 'ask') {
      const prompt = interaction.options.getString('prompt', true);
      const err = validateInput(prompt);
      if (err) {
        await interaction.reply({ content: `Invalid input: ${err}`, ephemeral: true });
        return;
      }
      await interaction.deferReply();
      const answer = await doChat(prompt);
      if (!answer) {
        await interaction.editReply('No response from AI.');
        return;
      }
      // break long replies into multiple messages if necessary
      if (answer.length <= 2000) {
        await interaction.editReply(answer);
      } else {
        // chunk
        for (let i = 0; i < answer.length; i += 1900) {
          const chunk = answer.slice(i, i + 1900);
          if (i === 0) await interaction.editReply(chunk);
          else await interaction.followUp(chunk);
        }
      }
      return;
    }

    if (name === 'summarize') {
      const text = interaction.options.getString('text', true);
      const err = validateInput(text);
      if (err) {
        await interaction.reply({ content: `Invalid input: ${err}`, ephemeral: true });
        return;
      }
      await interaction.deferReply();
      const prompt = `Summarize the following text in a concise, clear paragraph:\n\n${text}`;
      const answer = await doChat(prompt);
      if (!answer) {
        await interaction.editReply('No response from AI.');
        return;
      }
      await interaction.editReply(answer);
      return;
    }

    if (name === 'translate') {
      const text = interaction.options.getString('text', true);
      const to = interaction.options.getString('to') ?? 'English';
      const err = validateInput(text);
      if (err) {
        await interaction.reply({ content: `Invalid input: ${err}`, ephemeral: true });
        return;
      }
      await interaction.deferReply();
      const prompt = `Translate the following text to ${to}, preserving meaning and tone:\n\n${text}`;
      const answer = await doChat(prompt);
      if (!answer) {
        await interaction.editReply('No response from AI.');
        return;
      }
      await interaction.editReply(answer);
      return;
    }

    await interaction.reply({ content: 'Unknown command.', ephemeral: true });
  } catch (err) {
    console.error('Command handler error:', err);
    if (interaction.replied || interaction.deferred) {
      try {
        await interaction.editReply('An error occurred while handling your request.');
      } catch {}
    } else {
      try {
        await interaction.reply({ content: 'An error occurred while handling your request.', ephemeral: true });
      } catch {}
    }
  }
});

client.login(DISCORD_TOKEN).catch((err) => {
  console.error('Failed to login to Discord:', err);
  process.exit(1);
});
