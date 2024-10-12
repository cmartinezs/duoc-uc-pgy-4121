import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User | null = null;
  isLogged: boolean = false;

  private readonly logged_user_key = 'logged_user';

  users: User[] = [
    new User('admin', 'admin@ionic.com', '12345'),
    new User('cmartinezs', 'cmartinezs@ionic.com', '54321'),
    new User('other', 'other@ionic.com', '44555'),
  ];

  constructor(
    private readonly storageService: StorageService
  ) { }

  authenticate(u: string, p: string): boolean {
    const found = this.users.find(user => user.username === u)
    if (found !== undefined) {
      console.log('It found user: ', found.username)
      const matchPwd = found.password === p;
      if (matchPwd) {
        this.loggedUser = found;
        this.isLogged = true;
        this.storageService
          .set(this.logged_user_key, this.loggedUser)
          .then(() => console.log('User stored'));
      }
      return matchPwd
    }
    console.log('It didn\'t find user', u);
    return false;
  }

  async isAuthenticated() {
    console.log(this.loggedUser)
    console.log(this.isLogged)
    const userInMemory = this.loggedUser !== null;
    console.log("user exist: " + userInMemory)
    if (!userInMemory) {
      const user = await this.storageService.get(this.logged_user_key);
      if (user) {
        console.log('LoginService found user in storage')
        this.isLogged = true;
        this.loggedUser = user;
      }
    }
    return this.isLogged;
  }

  async logout() {
    this.loggedUser = null;
    this.isLogged = false;
    return this.storageService
      .remove(this.logged_user_key)
      .then(() => console.log('User removed from storage'));
  }
}
