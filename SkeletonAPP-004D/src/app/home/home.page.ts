import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: string;
  username: string;
  password: string;

  constructor() {
    this.message = 'Bienvenido!'
    this.username = 'username';
    this.password = 'password';
  }

  validateLogin(){
    const usernameValidation: string = 'admin';
    const passwordValidation: string = '12345';
    console.log("ejecutando validacion")
  }

}
