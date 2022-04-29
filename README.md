[![](./src/logo.svg)](https://ultimate.ai)
# Frontend Challenge

Hello! We're excited about your interest in joining the Ultimate team. We prepared a nice task for you to hack on together with us. We would like to see this as a team session, where we are your teammate! You will take the lead on this we would like you to share with us your thoughts as much as possible. If you're stuck, tell us! We will share with you some of our ideas and we can discuss them. It's okay to ask or consult the web.

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
- Your page allows users to get an overview over all the pre-trained intents that are available (use `fetchIntents` from `data.ts`).
- Clients can see what each intent is used for and see at least one example expression without any extra clicks.
- Clients can select/unselect intents individually or all at once.
- There is no need to persist the selection upon reloading the page.

- This project is based on react-create-app. Extend this code to fulfill the requirements.
- You are free to use any additional libraries you like, but you are certainly welcome to implement this without any further dependencies, using basic HTML elements.
- Use your favorite styling solution. This project already supports .css .scss and emotion js. Feel free to add anything else that you like to use.
- Your solution should work on desktop with any modern browser of your choice. Optimizing for different browsers, devices or screen resolutions is not needed for this challenge.
- We love tests but they are not a requirement to complete this challenge, so only add them if you have the extra time.

## What we look for:
- Clean, well structured code that is easy to read and extend.
- Good communication of your thought process, when you know exactly what you're doing, as well as when you still haven't decided how to do something.
- A simple UI that is easy to understand and intuitive to use.
