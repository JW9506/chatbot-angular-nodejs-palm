import { Component } from '@angular/core';
import { ChatService } from './service/chat.service';
import { ChatContent } from './interface/chat-content.interface';
import { finalize } from 'rxjs';
import { ChatServiceMock } from './service/chat.service.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message = '';

  contents: ChatContent[] = [];
  
  constructor(private chatService: ChatServiceMock) {

  }

  sendMessage(message: string): void {
    const chatContent: ChatContent = {
      agent: 'user',
      message,
    };

    this.contents.push(chatContent);
    this.contents.push({
      agent: 'chatbot',
      message: '...',
      loading: true,
    });

    this.message = '';
    this.chatService
      .chat(chatContent) // ajax call
      .pipe(
        finalize(() => {
          const loadingMessageIndex = this.contents.findIndex(
            (content) => content.loading
          ); // Remove loading message
          if (loadingMessageIndex !== -1) {
            this.contents.splice(loadingMessageIndex, 1);
          }
        })
      )
      .subscribe((content) => {
        this.contents.push(content);
      });
  }
}
