# Aetheria AI

A starter Discord bot for the Aetheria community. It includes `/ask`, `/summarize`, `/translate`, `/ping`, and `/botinfo`, and is designed for deployment on Railway.

## Important limits

This project does **not** automatically edit your existing Discord server's roles, channels, or member visibility. It is a bot application; server configuration is separate and must be reviewed in Discord. It also does not include automatic moderation yet. Keep permissions minimal and test in a private channel first.

## 1. Create the Discord application

1. Open the official Discord Developer Portal: https://discord.com/developers/applications
2. Create an application named `Aetheria AI`.
3. Under **Bot**, create/reset the bot token and copy it privately.
4. Under **OAuth2 > URL Generator**, select scopes `bot` and `applications.commands`.
5. Give it only the permissions it needs: View Channels, Send Messages, Read Message History, and Use Slash Commands. Do not grant Administrator.
6. Use the generated invite URL to add it to your Aetheria server.
7. Copy the Application ID. For guild-specific command registration, enable Developer Mode in Discord, right-click/copy your server ID.

Never publish the bot token or put it in source code.

## 2. Create an OpenAI API key

Create an API key in the official OpenAI Platform: https://platform.openai.com/api-keys. API usage may cost money and ChatGPT subscriptions do not automatically include API credits. Set usage limits before enabling the bot.

## 3. Configure locally

Install Node.js 22 or newer. Copy `.env.example` to `.env` and fill in:
- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_GUILD_ID` (recommended while testing)
- `OPENAI_API_KEY`
- `OPENAI_MODEL` (default `gpt-4.1-mini`)
- optional `AI_CHANNEL_ID` to restrict AI commands to one channel

Then run:

```bash
npm install
npm run register
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

## 4. Deploy on Railway

1. Create a private GitHub repository and upload these files.
2. In Railway, create a project and deploy from the GitHub repository.
3. Add the same environment variables in the Railway service's Variables panel. Do not upload `.env`.
4. Deploy and check the logs for `Ready as ...`.
5. Register slash commands once with `npm run register` from a trusted local environment, or use the same environment variables locally.

Railway's service must remain running for the bot to respond. Do not paste secrets into chat or issues.

## 5. Initial Aetheria setup recommendations

Create/verify these channels manually in Discord:
- `rules-and-info`
- `announcements`
- `general`
- `anime-and-manga`
- `music`
- `bot-commands`
- `support`

Keep `STAFF` and `SUPPORT` areas appropriately permission-restricted. Give the bot access only to `bot-commands` if using `AI_CHANNEL_ID`. Review role hierarchy and channel permissions before inviting members.

## Security checklist

- Keep the bot token and OpenAI key in environment variables.
- Never grant Administrator just to make the bot work.
- Use a private repository if you prefer to keep project details private.
- Rotate a token immediately if it is exposed.
- Restrict commands to a dedicated channel during testing.
- Check API usage and set a budget/usage alert.
- Avoid collecting or logging message content unnecessarily.
- Test with a private server or channel before wider use.

## Included files

- `src/index.ts` — bot runtime and AI commands
- `src/commands.ts` — slash command definitions
- `src/register-commands.ts` — registers slash commands
- `src/config.ts` — environment configuration
- `Dockerfile`, `railway.json` — deployment configuration
- `.github/workflows/ci.yml` — TypeScript check on pushes and pull requests
