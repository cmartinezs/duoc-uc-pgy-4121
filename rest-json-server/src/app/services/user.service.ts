import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUser(userId: string){
    //return this.http.get<User>(aquilaurl + userId);
  }

  getUserByUsername(username: string){
    return this.http.get<User[]>('http://localhost:3000/users?username=' + username);
  }

  postUser(newUser: User){
    return this.http.post<User>('http://localhost:3000/users', newUser);
  }

  deleteUser(userId: string){
    return this.http.delete('http://localhost:3000/users/' + userId);
  }
}
