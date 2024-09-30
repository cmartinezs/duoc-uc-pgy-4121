import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser!: Login | undefined;

  logins: Login[] = [
    {
      username: 'admin',
      password: '1234'
    },
    {
      username: 'cmartinezs',
      password: '4321'
    },
    {
      username: 'foo',
      password: 'qwer'
    }
  ]

  constructor() { }

  findByUsername(u: string): Login | undefined {
    return this.logins.find(l => l.username === u)
  }

  registerLoggedUser(login: Login){
    this.loggedUser = login;
  }

  logout() {
    this.loggedUser = undefined;
  }

  isAuthenticated(): boolean {
    console.log(this.loggedUser)
    return this.loggedUser !== undefined
  }
}
