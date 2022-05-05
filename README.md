[![](./src/logo.svg)](https://ultimate.ai)
# Frontend Challenge

Hello! We're excited about your interest in joining the Ultimate team. We prepared a nice task for you to hack on together with us. We would like to see this as a team session, where we are your team-mates! You will take the lead on this but we would like you to share with us your thoughts as much as possible. If you're stuck, tell us! We will share with you some of our ideas and we can discuss them. It's okay to ask or consult the web.

Please share your screen with us, so it feels a bit more like sitting in the same room.

## Some Background

Most of our clients use our AI technology to power the chat-bots on their websites.
When a visitor to their website write a message in the chat, our AI analyzes the message to understand what the user wants, what was the intention of the user. **We call this an intent**.

## Your Challenge

This project includes a function to produce intents data that you can use in your work.

Each item in the intents returned from the dunction contains the following:
- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.

See the [types file](./src/types.d.ts) for TS definitions for the intent.

**Your challenge is to build a page where our clients can see the list of the intents and select which ones they want to use in their AI bot.**

## Minimum Requirements
- Render a list of the intents, as provided to you via `fetchIntents()`
- Each item on the list should show at least:
  - Name
  - Description
- Clients can select/unselect intents individually or all at once.

## General Guidelines

- This project is based on react-create-app. Extend this code to fulfill the requirements.
- No need to use external libraries, but you can if you want.
- Supported styling solutions out of the box:
  - .css
  - .scss 
  - @emotion/react
- You're welcome to add test if you have time, but this is not a requirement!

## What we look for:
- Clean, well structured code that is easy to read and extend.
- We want to hear your thoughts, even if you're stuck, feel free to ask for help anytime.