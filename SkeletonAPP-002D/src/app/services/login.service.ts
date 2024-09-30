import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { StorageService } from './storage.service';

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

  constructor(
    private storage: StorageService
  ) { }

  async init(): Promise<void> {
    const loggedUser = await this.storage.get('loggedUser');
    if (loggedUser) {
      this.loggedUser = loggedUser;
    }
  }

  findByUsername(u: string): Login | undefined {
    return this.logins.find(l => l.username === u)
  }

  registerLoggedUser(login: Login): void {
    this.loggedUser = login;
    this.storage.set('loggedUser', login);
  }

  getLoggedUser(): Login | undefined {
    return this.loggedUser;
  }

  logout(): void {
    this.loggedUser = undefined;
    this.storage.remove('loggedUser');
  }

  isAuthenticated(): boolean {
    console.log(this.loggedUser)
    return this.loggedUser !== undefined
  }
}
