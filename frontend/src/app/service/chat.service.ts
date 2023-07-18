import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatContent } from '../interface/chat-content.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private httpClient: HttpClient) { }

  chat(chatContent: ChatContent): Observable<ChatContent> {
    return this.httpClient.post<ChatContent>(`${environment.api}/chatbot`, chatContent);
  }
}
