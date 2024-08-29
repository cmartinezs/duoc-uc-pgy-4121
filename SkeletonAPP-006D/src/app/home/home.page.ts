import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: string;
  username: string = 'user';
  password: string = 'aaaa';
  loginMessage!: string;

  constructor(
    private router: Router
  ) {
    this.message = 'Bienvenido desde Angular!'
  }

  validateLogin(){
    console.log("Ejecutando validacion")
    const userValid: string = 'admin';
    const pwdValid: string = '12345';

    if (
      this.username === userValid &&
      this.password === pwdValid
    ) {
      this.loginMessage = 'Login correcto';
      this.router.navigate(['/index'])
    } else {
      this.loginMessage = 'Login incorrecto';
    }
  }
}
