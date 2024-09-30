import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser!: User | null;
  isLogged: boolean = false;

  users: User[] = [
    new User('admin', 'admin@ionic.com', '12345'),
    new User('cmartinezs', 'cmartinezs@ionic.com', '54321'),
    new User('other', 'other@ionic.com', '44555'),
  ];

  constructor(private storageService: StorageService) { }

  validateLogin(u: string, p: string): boolean {
    const found = this.users.find(user => user.username === u)
    if (found !== undefined) {
      console.log('LoginService found user')
      const matchPwd = found.password === p;
      if (matchPwd) {
        this.loggedUser = found;
        this.isLogged = true;
        this.storageService.set('loggedUser', this.loggedUser);
      }
      return matchPwd
    }
    console.log('LoginService didnt find user')
    return false;
  }

  isAuthenticated(): boolean {
    console.log(this.loggedUser)
    console.log(this.isLogged)
    console.log("user existe: " + (this.loggedUser !== undefined && this.loggedUser !== null))
    if(this.loggedUser === undefined || this.loggedUser === null){
      const user = this.storageService.get('loggedUser');
      console.log("user: " + user)
      if(user) {
        user.then(user => {
          this.isLogged = true;
          this.loggedUser = user;
        });
      }
    }
    return this.isLogged;
  }

  logout() {
    this.loggedUser = null;
    this.isLogged = false;
    this.storageService.remove('loggedUser');
  }
}
