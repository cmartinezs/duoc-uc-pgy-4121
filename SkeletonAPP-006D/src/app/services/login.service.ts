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
  ]

  constructor() { }

  validateLogin(username: string, password: string): boolean {
    console.log("[LoginService] => validateLogin")

    /*
    forma:1
    for (let index = 0; index < this.users.length; index++) {
      const u = this.users[index];
      if (u.username === username) {
        console.log("[LoginService] => Usuario encontrado")
        return u.password === password
      }
    }*/

    /*
    forma:2
    const found = this.users.find(u => u.username === username)
    if (found !== undefined) {
      console.log("[LoginService] => Usuario encontrado (.find)")
      return found.password === password
    }
    
    console.log("[LoginService] => Usuario no encontrado")
    return false;*/

    //forma 3
    return this.users.find(u => 
      u.username === username && u.password === password) !== undefined
  }
}
