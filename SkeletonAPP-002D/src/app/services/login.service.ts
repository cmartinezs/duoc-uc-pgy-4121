import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
}
