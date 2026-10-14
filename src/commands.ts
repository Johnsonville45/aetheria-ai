import { SlashCommandBuilder } from 'discord.js';

export const commands = [
  new SlashCommandBuilder()
    .setName('ask')
    .setDescription('Ask the AI a question')
    .addStringOption((opt) =>
      opt
        .setName('prompt')
        .setDescription('The prompt to send to the AI')
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName('summarize')
    .setDescription('Summarize a block of text')
    .addStringOption((opt) =>
      opt
        .setName('text')
        .setDescription('Text to summarize')
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName('translate')
    .setDescription('Translate text to another language')
    .addStringOption((opt) =>
      opt
        .setName('text')
        .setDescription('Text to translate')
        .setRequired(true)
    )
    .addStringOption((opt) =>
      opt
        .setName('to')
        .setDescription('Target language (e.g. Spanish, fr, ja)')
        .setRequired(false)
    ),

  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),

  new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Show basic bot info')
];

export const commandData = commands.map((c) => c.toJSON());
