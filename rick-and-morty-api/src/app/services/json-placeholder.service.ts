import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(
    private http: HttpClient
  ) { }

  createPost(title: string, body: string, userId: number){
    const data =  {
      title: title,
      body: body,
      userId: userId,
    };
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
