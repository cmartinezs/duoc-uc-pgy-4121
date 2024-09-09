import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [
    {
      username: "admin",
      password: "12345"
    },
    {
      username: "cmartinezs",
      password: "12345"
    },
    {
      username: "other",
      password: "12345"
    }
  ]

  constructor() { }

  validateLogin(u: string, p: string): boolean {
    for (let index = 0; index < this.users.length; index++) {
      const user = this.users[index];
      if (user.username === u && user.password === p) {
        console.log(`Usuario encontrado: ${u}`)
        return true;
      }
    }
    console.log(`Usuario no encontrado: ${u}`)
    return false;
  }
}
