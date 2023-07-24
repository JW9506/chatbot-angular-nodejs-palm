import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatContent } from '../interface/chat-content.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceMock {
  constructor() { }

  chat(chatContent: ChatContent): Observable<ChatContent> {
    return new Observable<ChatContent>((observer) => {
      setTimeout(() => {
        observer.next({
          agent: 'chatbot',
          message: `
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          Hello, I am chatbot
          `,
        });
        observer.complete();
      }, 200);
    })
  }
}
