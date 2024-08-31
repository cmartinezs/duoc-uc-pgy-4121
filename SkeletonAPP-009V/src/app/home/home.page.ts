import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mainTitle: string;
  subTitle: string;
  welcomeMessage: string;
  loginMessage!: string;
  username!: string;
  password!: string;

  constructor(private router: Router) {
    this.mainTitle = 'SkeletonAPP';
    this.subTitle = 'Aqui comienza';
    this.welcomeMessage = 'Bienvenido!'
  }

  validateLogin(){
    console.log("Ejecutando validacion!")
    if(this.username === 'admin'
      && this.password === '12345') {
      this.loginMessage = 'Inicio de sesion valido';
      this.welcomeMessage = `Bienvenido ${this.username}`;

      const extras: NavigationExtras = {
        state: {
          user: this.username
        }
      }
      this.router.navigate(['/index'], extras);
    } else {
      this.loginMessage = 'Inicio de sesion invalido';
    }
  }
}
