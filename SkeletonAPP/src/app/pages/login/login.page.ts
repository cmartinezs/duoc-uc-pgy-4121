import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username!: string;
  password!: string;
  message!: string;

  constructor(private router: Router) {}

  validateLogin() {
    if (this.username === 'admin' 
      && this.password === '12345') {
      let extras: NavigationExtras = {
        state: {
          user: this.username
        }
      }
      this.router.navigate(['/home'], extras);
    } else {
      this.message = 'Login con error';
    }
  }

}
