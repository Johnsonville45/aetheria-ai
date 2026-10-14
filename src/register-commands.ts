import { REST, Routes } from 'discord.js';
import { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } from './config.js';
import { commandData } from './commands.js';

async function register() {
  const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

  try {
    if (DISCORD_GUILD_ID) {
      console.log(`Registering ${commandData.length} commands to guild ${DISCORD_GUILD_ID}...`);
      await rest.put(Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID), {
        body: commandData
      });
      console.log('Guild commands registered.');
    } else {
      console.log(`Registering ${commandData.length} global commands...`);
      await rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), {
        body: commandData
      });
      console.log('Global commands registered. Note: global commands can take up to an hour to propagate.');
    }
  } catch (err) {
    console.error('Failed to register commands:', err);
    process.exitCode = 1;
  }
}

register();
