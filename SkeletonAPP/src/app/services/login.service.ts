import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {StorageService} from './storage.service';
import {UserService} from "./user.service";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: User | null = null;
  isLogged: boolean = false;

  private readonly logged_user_key = 'logged_user';


  constructor(
    private readonly storageService: StorageService,
    private readonly userService: UserService
  ) { }

  async authenticate(u: string, p: string): Promise<User | null> {
    const founds = await firstValueFrom(this.userService.findUserByUsername(u));

    if (founds.length > 0) {
      const found = founds[0]
      console.log('It found user: ', found.username)
      const matchPwd = found.password === p;
      if (matchPwd) {
        this.loggedUser = found;
        this.isLogged = true;
        await this.storageService.set(this.logged_user_key, this.loggedUser);
      }
      return found
    }
    console.log('It didn\'t find user', u);
    return null;
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
