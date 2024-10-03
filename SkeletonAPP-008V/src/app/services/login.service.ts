import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

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

  loggedUser!: User | undefined;

  constructor(
    private storageService: StorageService,
  ) { 
    this.storageService.init();
  }

  validateLogin(u: string, p: string): boolean {

    for (let index = 0; index < this.users.length; index++) {
      const user = this.users[index];
      if(user.username === u && user.password === p){
        this.loggedUser = user;
        this.storageService.set('logged_user', user.username);
        return true;
      }
    }

    return false;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  async getLoggedUser(): Promise<User | undefined> {
    if(!this.loggedUser) {
      const username = await this.storageService.get('logged_user');
      const found = this.users.find(el => el.username === username)
      if(found !== undefined) {
        this.loggedUser = found;
      }
    }
    return this.loggedUser;
  }

  logout() {
    this.storageService.remove('logged_user');
    this.loggedUser = undefined;
  }
}
