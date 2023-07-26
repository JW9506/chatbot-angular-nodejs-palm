# Chatbot build in Angular 16 and NodeJS, using models/chat-bison-001

Get your own API_KEY from [Generative Language API](https://console.cloud.google.com/apis/library/browse?q=generative%20language%20api), server will read an environment variable named `API_KEY` to run.

![Waiting](./waiting.jpg)
![Message Loaded](./message_loaded.jpg)

## Software Requirements
- NodeJS v18.19.0
- Angular CLI v17.0.7

## Server

Install server dependencies

 ```bash
    cd server
    yarn install
    cd ..
    node server
```

## Frontend
Install frontend development dependencies

 ```bash
    yarn install
    yarn start
```