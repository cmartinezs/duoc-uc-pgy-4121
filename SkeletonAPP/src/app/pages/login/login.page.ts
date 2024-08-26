import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
      this.router.navigate(['/home']);
    } else {
      this.message = 'Login con error';
    }
  }

}
