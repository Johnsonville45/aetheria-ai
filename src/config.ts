import dotenv from 'dotenv';
dotenv.config();

function required(name: string, value?: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const DISCORD_TOKEN = required('DISCORD_TOKEN', process.env.DISCORD_TOKEN);
export const DISCORD_CLIENT_ID = required('DISCORD_CLIENT_ID', process.env.DISCORD_CLIENT_ID);
export const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID ?? '';
export const OPENAI_API_KEY = required('OPENAI_API_KEY', process.env.OPENAI_API_KEY);
export const OPENAI_MODEL = required('OPENAI_MODEL', process.env.OPENAI_MODEL);
export const AI_CHANNEL_ID = process.env.AI_CHANNEL_ID ?? '';

export const MAX_INPUT_CHARS = 5000; // validation guard
