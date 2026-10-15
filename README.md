# Aetheria AI

### An AI-Powered Discord Assistant

Aetheria AI is an AI-powered Discord bot designed to make artificial intelligence accessible directly within Discord servers. Built with TypeScript, Node.js, Discord.js, and the OpenAI API, Aetheria AI provides tools for answering questions, summarizing text, translating languages, and accessing basic bot information through easy-to-use slash commands.

The goal of Aetheria AI is to provide a simple, useful, and extensible AI assistant for Discord communities. Whether users need help understanding a topic, shortening a long passage, translating text, or checking whether the bot is responding, Aetheria AI brings these capabilities into a familiar chat environment.

Unlike traditional Discord bots that rely entirely on predefined responses, Aetheria AI can use an AI model to generate responses based on the information provided in a request. This makes it useful for a wider range of questions and text-processing tasks.

Aetheria AI is designed to be lightweight and configurable, with environment variables for credentials and model selection. It can be run locally or deployed in a containerized environment.

---

## Table of Contents

- [Overview](#overview)
- [What Type of Bot Is Aetheria AI?](#what-type-of-bot-is-aetheria-ai)
- [Features](#features)
- [How the AI Works](#how-the-ai-works)
- [Technology Stack](#technology-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Commands](#available-commands)
- [Privacy and Security](#privacy-and-security)
- [Deployment](#deployment)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Aetheria AI combines Discord's slash-command system with an external AI service to provide useful text-based assistance.

Users interact with the bot by selecting a command and providing the required information. For AI-powered commands, the bot sends the relevant input to the configured OpenAI model, receives the generated response, and returns the result through Discord.

The project focuses on three main AI capabilities:

1. **Question answering:** Ask questions and receive AI-generated explanations or suggestions.
2. **Text summarization:** Transform longer passages into shorter summaries.
3. **Language translation:** Request translations between languages.

Additional commands provide basic bot information and a way to check whether the bot responds to Discord interactions.

Aetheria AI is intended to be a foundation that can be improved over time. Its modular approach makes it possible to introduce additional commands and integrations as the project develops.

## What Type of Bot Is Aetheria AI?

Aetheria AI is an **AI assistant, productivity bot, and text-processing bot for Discord**.

It belongs to the category of Discord bots that integrate external AI models instead of relying exclusively on static command responses.

### AI Assistant

Aetheria AI can answer user questions by sending them to a configured AI model. Depending on the question, the model may provide explanations, suggestions, summaries, or general information.

### Productivity Bot

The summarization and translation commands can help users process text more efficiently. These tools may be useful in study groups, gaming communities, programming servers, multilingual communities, and other Discord environments.

### Text-Processing Bot

The bot can use AI to transform text according to a user's request. For example, it can generate a shorter version of a passage or produce a translation into a specified language.

### Slash-Command Bot

Aetheria AI uses Discord application commands, allowing users to interact with its features through commands such as `/ask`, `/summarize`, and `/translate`.

The bot is not intended to replace human judgment or professional advice. AI-generated information can be incomplete or incorrect, so users should verify important results.

---

## Features

### 1. AI Question Answering

**Command:** `/ask`

The `/ask` command allows users to submit a question and receive an AI-generated response.

Possible uses include:

- Understanding unfamiliar subjects.
- Learning basic programming concepts.
- Exploring ideas for projects.
- Getting explanations of technical terminology.
- Brainstorming content for a community.
- Asking general knowledge questions.

Example:

`/ask question: Explain artificial intelligence in simple terms.`

Aetheria AI sends the question to the configured OpenAI model and returns the generated answer.

The response depends on the model, the wording of the question, and the information available to the model. The bot does not guarantee that every answer is accurate or up to date.

### 2. Text Summarization

**Command:** `/summarize`

The `/summarize` command is designed to shorten longer passages of text while preserving their main ideas.

Possible uses include:

- Summarizing articles.
- Condensing study materials.
- Reviewing meeting notes.
- Simplifying lengthy explanations.
- Extracting important points from supplied text.

Example:

`/summarize text: [Paste the passage you want summarized]`

The supplied text is sent to the configured AI model, which generates a shorter version.

The quality of a summary depends on the length, clarity, and subject matter of the input. Users should review summaries when important details must not be omitted.

### 3. Language Translation

**Command:** `/translate`

The `/translate` command uses AI to translate supplied text into a requested language.

Possible uses include:

- Translating short messages.
- Understanding text written in another language.
- Helping multilingual communities communicate.
- Translating general passages.
- Supporting language learning.

Example:

`/translate text: Hello, how are you? language: Spanish`

The bot sends the text and target language to the configured AI model and returns the generated translation.

Translations may not always preserve every cultural nuance, idiom, or technical meaning. Important translations should be checked by a qualified speaker when accuracy is essential.

### 4. Ping Command

**Command:** `/ping`

The `/ping` command provides a basic way to check whether the bot responds to a Discord command.

It can help users and administrators troubleshoot basic connectivity or interaction issues.

A successful ping does not necessarily confirm that the OpenAI API is working. Discord connectivity and AI service availability are separate concerns.

### 5. Bot Information

**Command:** `/botinfo`

The `/botinfo` command provides information about Aetheria AI.

The specific details displayed depend on the implementation in the repository. Users can use this command as a convenient entry point for learning about the bot.

---

## How the AI Works

Aetheria AI uses a request-and-response architecture that connects Discord interactions to an external AI service.

### Step 1: A User Runs a Command

A user selects a slash command in Discord and supplies the necessary input.

For example, a user might ask a question using `/ask` or provide a passage to summarize using `/summarize`.

### Step 2: Discord Sends the Interaction

Discord delivers the slash-command interaction to the running Aetheria AI application.

The application identifies which command was invoked and obtains the relevant input.

### Step 3: The Bot Processes the Request

The bot prepares the information required by the selected command.

For AI-powered commands, this includes the user's question or text and any additional options required by the command.

### Step 4: The Bot Calls the OpenAI API

Aetheria AI uses the official OpenAI SDK to communicate with the OpenAI API.

The application authenticates using the configured `OPENAI_API_KEY` and selects the model specified by `OPENAI_MODEL`.

The API request depends on the command being executed.

### Step 5: The AI Generates a Response

The selected AI model processes the request and returns generated text.

For example, it may generate an answer, summarize a passage, or translate text.

The model's output depends on the supplied input, model capabilities, and service configuration.

### Step 6: The Bot Responds in Discord

Aetheria AI receives the result and sends it back through the Discord interaction.

The user can then read the answer or use the generated text for their intended purpose.

### Simplified Architecture

```text
Discord User
     |
     v
Slash Command
     |
     v
Aetheria AI Application
     |
     v
Command Processing
     |
     v
OpenAI API
     |
     v
AI-Generated Text
     |
     v
Discord Response
```

This design separates Discord interaction handling from AI generation. Discord manages the user interaction, while the external AI service generates the requested content.

The application requires a valid OpenAI API key and an accessible model for AI-powered commands to work.

---

## Technology Stack

Aetheria AI uses the following technologies:

| Technology | Purpose |
|---|---|
| TypeScript | Application development with static type checking |
| Node.js | JavaScript runtime |
| Discord.js | Discord bot integration and interaction handling |
| OpenAI API | AI-generated answers, summaries, and translations |
| OpenAI SDK | Communication with the AI service |
| Docker | Containerized application deployment |
| Railway | Optional hosting and deployment platform |

TypeScript helps organize the application's code and identify certain errors during development. Node.js runs the application, while Discord.js connects it to Discord's API.

The OpenAI API provides the model used for AI-powered text generation. Docker provides a consistent way to package the application for deployment.

Railway is documented as a deployment option, but the presence of deployment instructions does not mean that a live instance is currently hosted there.

---

## Requirements

Before installing Aetheria AI, prepare the following:

- Node.js 22 or later.
- npm.
- A Discord application.
- A Discord bot token.
- A Discord application client ID.
- An OpenAI API key for AI-powered commands.
- Access to an OpenAI model supported by your API account.
- Docker, if you intend to deploy using containers.

You should also have permission to configure the Discord application and invite the bot to your test server.

---

## Installation

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/Johnsonville45/aetheria-ai.git
cd aetheria-ai
```

### 2. Install Dependencies

Install the dependencies specified by the project lockfile:

```bash
npm ci
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and enter the required values.

Do not publish your `.env` file or share your secret credentials.

### 4. Build the Project

Compile the TypeScript application:

```bash
npm run build
```

Resolve any build errors before continuing.

### 5. Register Slash Commands

Run the command-registration script:

```bash
npm run register-commands
```

For development, configure `DISCORD_GUILD_ID` with your test server's ID if the registration script uses it for guild-specific registration.

Guild-specific registration is useful during development because changes can become available more quickly than global commands.

### 6. Start the Bot

Run:

```bash
npm start
```

Keep the application running so Discord can deliver interactions to it.

Test the commands in a Discord server where the bot has been invited and the commands have been registered.

---

## Configuration

Aetheria AI uses environment variables to configure Discord access, AI credentials, and optional command restrictions.

| Variable | Required | Description |
|---|---|---|
| `DISCORD_TOKEN` | Yes | Authenticates the bot with Discord |
| `DISCORD_CLIENT_ID` | Yes | Identifies the Discord application |
| `DISCORD_GUILD_ID` | Optional | Specifies a development server for command registration |
| `OPENAI_API_KEY` | Yes for AI features | Authenticates requests to the OpenAI API |
| `OPENAI_MODEL` | Yes for AI features | Selects the AI model |
| `AI_CHANNEL_ID` | Optional | Configures a channel restriction if supported by the application |

Use a model name that is available to your OpenAI API account.

Keep credentials in environment variables rather than placing them directly in source code.

If the bot cannot authenticate, check that the relevant token or API key is valid and that the variable names match the application's configuration.

---

## Available Commands

| Command | Description |
|---|---|
| `/ask` | Sends a question to the configured AI model |
| `/summarize` | Requests a summary of supplied text |
| `/translate` | Requests translation into a target language |
| `/ping` | Checks whether the bot responds to an interaction |
| `/botinfo` | Displays bot information |

The exact options accepted by each command are determined by the command definitions in the source code.

If a command does not appear in Discord, check that command registration completed successfully and that the bot was invited with the required application-command scope.

---

## Privacy and Security

Aetheria AI sends text supplied to its AI-powered commands to the configured OpenAI API to generate responses.

Users should not submit passwords, private access tokens, API keys, financial information, or other sensitive data through AI commands.

The current inspected implementation does not document a database-backed conversation history or persistent user-memory feature. This should not be interpreted as a guarantee that no information is processed or retained by Discord, the hosting provider, or the AI service.

Data handling may depend on the services used, their configurations, and their applicable policies.

### Protecting Credentials

- Never commit `.env` files.
- Never publish Discord bot tokens.
- Never expose OpenAI API keys.
- Use environment variables or your hosting provider's secret-management settings.
- Rotate credentials immediately if they are exposed.
- Limit access to deployment settings and logs.

The repository excludes `.env` through `.gitignore`, but developers should still verify that secrets are not included in commits or logs.

---

## Deployment

Aetheria AI can be run locally or deployed using a compatible hosting environment.

### Docker

The repository includes a Dockerfile for building and running the application in a container.

Use the Docker workflow supported by your environment, and provide all required environment variables securely.

### Railway

Railway is a documented hosting option.

A typical deployment process is:

1. Connect the repository to a Railway project.
2. Configure the required environment variables.
3. Build and deploy the application using the included Dockerfile.
4. Review the deployment logs.
5. Confirm that the application starts successfully.
6. Test the slash commands in Discord.
7. Check the AI commands using a valid OpenAI API key.

Deployment must be verified in the hosting dashboard. Repository configuration alone does not confirm that the bot is online.

---

## Limitations

Aetheria AI has several important limitations:

- AI commands require a valid OpenAI API key.
- The configured model must be accessible to the API account.
- AI-generated answers may contain mistakes.
- Summaries may omit details from the original text.
- Translations may not preserve every nuance.
- API rate limits or service outages may interrupt AI requests.
- API usage may incur costs depending on the account and model.
- The bot must be running to process interactions.
- Persistent conversation memory is not documented as an implemented feature.
- A successful `/ping` response does not guarantee that the AI service is available.
- Hosting and uptime depend on the actual deployment environment.

Users should verify important information rather than relying exclusively on AI-generated content.

---

## Future Improvements

The following are possible future enhancements. They are ideas for development, not claims that these features are currently implemented.

### Conversation Sessions

Add optional conversation sessions so users can ask follow-up questions while preserving relevant context.

### Custom AI Personalities

Allow administrators or users to choose response styles, such as concise, educational, professional, or creative.

### Programming Assistant

Add a dedicated command for explaining code, helping troubleshoot programming errors, and discussing software concepts.

### Improved Error Handling

Provide clearer messages for API failures, invalid inputs, missing configuration, and rate limits.

### Usage Controls

Introduce configurable request limits to help manage API costs and prevent excessive usage.

### Administrative Settings

Add controls for enabling commands, restricting access, and configuring the channels where the bot operates.

### Expanded Language Support

Improve translation options and provide clearer controls for selecting source and target languages.

### Testing and Monitoring

Add automated tests, health checks, and monitoring to improve reliability and simplify troubleshooting.

### Image Understanding

Explore image-analysis capabilities if the application is updated to support image inputs and the selected model provides the necessary functionality.

Each proposed feature should be implemented and tested before it is described as available.

---

## Contributing

Contributions, bug reports, and suggestions are welcome.

To contribute:

1. Review the existing source code and command definitions.
2. Describe the proposed change or problem.
3. Create a branch for your work.
4. Make focused changes.
5. Run the build and appropriate tests.
6. Update the documentation when behavior or configuration changes.
7. Submit a pull request describing your changes.

Do not include API keys, bot tokens, personal credentials, or other secrets in commits, issues, or pull requests.

Please distinguish implemented functionality from planned features when updating the documentation.

---

## License

Check the repository's license file for the terms governing the use, modification, and distribution of this project.

If no license has been added, contact the repository owner before assuming that the project can be redistributed or modified under an open-source license.

---

## Project Information

**Project:** Aetheria AI  
**Category:** AI Assistant and Productivity Bot  
**Platform:** Discord  
**Language:** TypeScript  
**Runtime:** Node.js  
**AI Integration:** OpenAI API  
**Repository:** https://github.com/Johnsonville45/aetheria-ai

Aetheria AI aims to make AI-powered text assistance easy to access within Discord. Its current foundation supports question answering, summarization, and translation, with room for additional commands and improvements as the project evolves.

**Aetheria AI — AI assistance, directly in Discord.**
