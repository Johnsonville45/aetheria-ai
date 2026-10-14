# Aetheria AI

Aetheria AI is a Discord bot that uses OpenAI to answer questions, summarize and translate text.

Prerequisites
- Node.js 22+
- Docker (for container deployment)
- A Discord application & bot with its token and client ID
- An OpenAI API key

Required environment variables
- DISCORD_TOKEN — bot token
- DISCORD_CLIENT_ID — application client id
- DISCORD_GUILD_ID — (optional for development) guild to register commands to
- OPENAI_API_KEY — your OpenAI API key
- OPENAI_MODEL — model name to use (e.g. gpt-4o-mini)
- AI_CHANNEL_ID — optional. If set, commands will only work in this channel.

Local development
1. Copy .env.example to .env and populate variables.
2. npm ci
3. npm run build
4. npm run register-commands    # registers commands to the guild if DISCORD_GUILD_ID is set
5. npm start

Docker / Railway
The included Dockerfile builds the app and runs the compiled output. Railway can use this Dockerfile directly. Ensure environment variables are set in Railway.

Permissions
The bot requires the following permissions only:
- Send Messages (permission integer 2048)

Invite URL (replace CLIENT_ID):
https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=applications.commands%20bot&permissions=2048

Security
Do not commit secrets. .env is excluded by .gitignore. Use Railway or environment variables for secrets.

Notes & troubleshooting
- Global command registration can take up to an hour to propagate. For quick testing set DISCORD_GUILD_ID.
- The bot uses the official OpenAI SDK. If you get authentication errors, verify OPENAI_API_KEY.

Limitations
I did not deploy or test the bot in a live Discord environment — follow the steps above to register commands and run the bot in your own environment.
