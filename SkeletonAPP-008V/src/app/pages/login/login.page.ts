import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';


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
    private toastController: ToastController,
    private loginService: LoginService
  ) {}

  validateLogin() {
    if (
      this.loginService.validateLogin(this.username, this.password)
    ) {
      this.toastMessage('Usuario y contraseña valido', 'success');
      this.router.navigate(['/home']);
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
