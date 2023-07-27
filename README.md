# Chatbot build in Angular 17 and NodeJS, using models/chat-bison-001

Get your own API_KEY from [Generative Language API](https://console.cloud.google.com/apis/library/browse?q=generative%20language%20api), server will read an environment variable named `API_KEY` to run.

![Waiting](./waiting.jpg)
![Message Loaded](./message_loaded.jpg)

## Software Requirements
- NodeJS v18.19.0
- Angular CLI v17.0.7

## Server

Install server dependencies

 ```bash
    # Move to the right folder
    cd server
    # To install dependencies
    yarn
    cd ..
    # Run server
    node server
```

## Frontend
Install frontend development dependencies

 ```bash
    # Move to the right folder
    cd frontend
    # To install dependencies
    yarn
    # Start a frontend development server
    yarn start
```