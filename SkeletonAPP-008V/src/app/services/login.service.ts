import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [
    new User('admin', '12345'),
    new User('cmartinezs', '12345'),
    new User('other', '12345'),
    new User('pepito', '12345'),
  ]

  loggedUser!: User;

  constructor() { }

  validateLogin(u: string, p: string): boolean {

    for (let index = 0; index < this.users.length; index++) {
      const user = this.users[index];
      if(user.username === u && user.password === p){
        this.loggedUser = user;
        return true;
      }
    }

    return false;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getLoggedUser(): User {
   return this.loggedUser;
  }
}
