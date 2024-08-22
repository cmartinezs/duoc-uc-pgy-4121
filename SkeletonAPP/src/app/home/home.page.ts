import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username!: string;
  password!: string;
  message!: string;

  constructor() {}

  validateLogin() {
    if (this.username === 'admin' 
      && this.password === '12345') {
      this.message = 'Login exitoso'
    } else {
      this.message = 'Login con error'
    }
  }

}
