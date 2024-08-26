import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: string;
  loginMessage: string = '';
  username: string;
  password: string;

  constructor() {
    this.message = 'Bienvenido desde Angular!';
    this.username = 'user0'
    this.password = 'pwd0';
  }

  generateMessage(){
    return 'Bienvenido desde Angular! (funcion)';
  }

  validateLogin(){
    console.log("Ejecutando validacion!")

    const userdata: string = 'admin';
    const pwddata: string = '12345';

    if (userdata === this.username 
      && pwddata === this.password) {
        this.loginMessage = 'Login exitoso';
    } else {
      this.loginMessage = 'Login erroneo';
    }
  }
}
