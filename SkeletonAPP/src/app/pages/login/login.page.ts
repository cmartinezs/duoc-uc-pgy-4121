import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username!: string;
  password!: string;
  welcomeMessage: string = 'Bienvenido!';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  validateLogin() {
    if (this.username === 'admin' 
      && this.password === '12345') {
      let extras: NavigationExtras = {
        state: {
          user: this.username
        }
      }
      this.toastMessage('Usuario y contraseña valido', 'success');
      this.router.navigate(['/home'], extras);
    } else {
      this.toastMessage('Usuario y contraseña no valido', 'danger');
    }
  }

  async toastMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
    });
    toast.present();
  }

}
