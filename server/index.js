const express = require("express");
const cors = require("cors");
require('dotenv').config()

const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const app = express();
const port = 5050;
const API_KEY = process.env.API_KEY;

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const MODEL_NAME = "models/chat-bison-001";

const CONTEXT = "Reply to each query with a sonnet. Let sonnets be the sole response, within the limit of 150 words.";
const EXAMPLES = [
  {
    input: { content: "How can you improve your coding skills?" },
    output: {
      content: `To better one's coding with zeal,
A practice routine must be real.
Write code every day,
In algorithms play,
And projects that passion reveal.

Refactor the old to the new,
With patterns that good devs review.
Read code that's well-written,
By bug bites be smitten,
Each error's a chance to breakthrough.

For languages, broaden your scope,
Frameworks and tools give you hope.
Through open-source dive,
In communities thrive,
With practice, there's no end to your rope.`
    },
  },
];

let messages = [];
app.post("/api/chatbot", async (req, res) => {
  const requestData = req.body;

  if (requestData && requestData.message) {
    const message = requestData.message;
    messages.push({ content: message });

    const result = await client.generateMessage({
      model: MODEL_NAME,
      prompt: {
        context: CONTEXT,
        examples: EXAMPLES,
        messages,
      },
    });

    const messageResult = result[0].candidates[0].content;
    messages.push({ content: messageResult });

    res.json({ message: messageResult, agent: "chatbot" });
  } else {
    res.status(400).json({ error: "Content not provided" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});