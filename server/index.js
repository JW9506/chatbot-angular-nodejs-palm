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

app.post("/api/chatbot", async (req, res) => {
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});