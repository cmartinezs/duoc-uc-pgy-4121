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
    //return this.http.get<User[]>(aquilaurl);
  }

  getUser(userId: number){
    //return this.http.get<User>(aquilaurl + userId);
  }

  postUser(newUser: User){
    //return this.http.post<User>(aquilaurl, newUser);
  }

  deleteUser(userId: number){
    //return this.http.delete(aquilaurl + userId);
  }
}
