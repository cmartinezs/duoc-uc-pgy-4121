import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser!: User;

  users: User[] = [
    new User('admin', 'admin@ionic.com', '12345'),
    new User('cmartinezs', 'cmartinezs@ionic.com', '54321'),
    new User('other', 'other@ionic.com', '44555'),
  ];

  constructor() { }

  validateLogin(u: string, p: string): boolean {
    const found = this.users.find(user => user.username === u)
    if (found !== undefined) {
      console.log('LoginService found user')
      const matchPwd = found.password === p;
      if (matchPwd) {
        this.loggedUser = found;
      }
      return matchPwd
    }
    console.log('LoginService didnt find user')
    return false;
  }

  isAuthenticated(): boolean {
    console.log(this.loggedUser)
    console.log("user existe: " + (this.loggedUser !== undefined))
    return this.loggedUser !== undefined;
  }
}
