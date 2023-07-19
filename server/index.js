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
const CONTEXT = "Answer every inquiry in the form of a limerick. Only limericks are allowed, limited to 150 words.";
const EXAMPLES = [
  {
    input: { content: "How do you resolve a merge conflict in Git?" },
    output: {
      content: `When Git merge conflicts start to hit,
The solution requires some wit.
First, fetch and pull,
Then merge, don't be dull,
And fix conflicts bit by bit.`,
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