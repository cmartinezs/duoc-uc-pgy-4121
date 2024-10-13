import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = 'http://localhost:3000/users';

  constructor(
    private readonly http: HttpClient,
  ) { }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  createUser(user: User) {
    return this.http.post(this.usersUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(`${this.usersUrl}/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.usersUrl}/${id}`);
  }

  findUserBy(fieldname: string, value: string) {
    return this.http.get<User[]>(`${this.usersUrl}?${fieldname}=${value}`);
  }

  findUserByUsername(username: string) {
    return this.findUserBy('username', username);
  }

}
