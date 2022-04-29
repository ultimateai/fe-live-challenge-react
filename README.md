[![](./src/logo.svg)](https://ultimate.ai)
# Frontend Challenge

Hello! We're excited about your interest in joining the Ultimate team. We prepared a nice task for you to hack on together with us. We would like to see this as a team session, where we are your team-mates! You will take the lead on this we would like you to share with us your thoughts as much as possible. If you're stuck, tell us! We will share with you some of our ideas and we can discuss them. It's okay to ask or consult the web.

Please share your screen with us, so it feels a bit more like sitting in the same room.

## Some Background

Most of our clients use our AI technology to power the chat-bots on their websites.
When a visitor to their website write a message in the chat, our AI analyzes the message to understand what the user wants, what was the intention of the user. **We call this an intent**.

We then use that _intent_ in order to answer with the most appropriate reply. For example:

---
> User: "Hello"

*AI understands that this is a Greeting*

> Bot: "Hello :) How can I help you?"
---

In order to understand what the user wants, our AI is trained to recognize different intents. 

For each intent the AI gets a list of user messages (we call them expressions) as training data to learn 
how users express that intent. 
For every intent there will also be a reply that the AI Bot should give, once it recognizes that intent. 
In the above example that intent would look like this:

---
```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```
---

Most of those intents are specific to the client and their use case. An airline will have other intents 
than an eCommerce platform.

Some intents however are used by almost all of our clients. 
So when a new client creates an AI bot in our software we offer a list of already pretrained intents as part of the bot creation process.
They can choose to copy the pretrained intents to their AI Bot, so they can save time and don't have to 
create these intents from scratch.

## Your Challenge

This project includes a function to produce intents data that you can use in your work.

Each item in the JSON contains the following:
- `id`: The unique ID that identifies the intent.
- `name`: The name of that intent.
- `description`: A string describing what the intent is used for.
- `trainingData`: The training data that is used to train the AI. It contains:
    - `expressionCount`: the total number of training expressions for this intent
    - `expressions`: An array with three example expressions for this intent, each with a unique `id` and a `text` field with the expression.
- `reply`: The reply the bot will give when the intent is recognized, containing again a unique `id` and a `text` field with the actual reply.

See the [types file](./src/types.d.ts) for TS definitions for the intent.

**Your challenge is to build a page where our clients can see the pre-trained intents and select which ones they want to use in their AI bot.**
**This page would be one step of a wizard in the above-mentioned bot creation process (No need to build the whole wizard of course ;)).**

In this challenge we want you to get creative! 
We did not include a design or mockups and you are free to solve that challenge the way you think works best for the given data.

This page is targeted at clients who are new to AI. They might be setting up their first AI bot in our software.
Think about a UI that is easy to understand for clients who might not know what the term "expression" means in this context and 
are not yet very familiar with intent recognition, so make sure your UI communicates what they are looking at on this page. 

## Minimum Requirements
- Render a list of the pre-trained intents, as provided to you via `fetchIntents()`
- Each item on the list should show at least:
  - Name
  - Description
  - One example expression
- Clients can select/unselect intents individually or all at once.

## General Guidelines

- This project is based on react-create-app. Extend this code to fulfill the requirements.
- No need to use external libraries, but you can if you want.
- Supported styling solutions out of the box:
  - .css
  - .scss 
  - @emotion/react
- You're welcome to add test if you have time, but this is not a requirement!
- 
## What we look for:
- Clean, well structured code that is easy to read and extend.
- We want to hear your thoughts, even if you're stuck, simply speak up and we will help you.
- Bug free code and answers the specifications.

