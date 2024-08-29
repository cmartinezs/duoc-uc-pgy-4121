import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: string;
  username: string = 'user';
  password: string = 'aaaa';

  constructor(
    private router: Router,
    private toastController: ToastController
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
      this.showToastMessage('Login correcto', 'success')

      const extras: NavigationExtras = {
        state: {
          user: this.username
        }
      }

      this.router.navigate(['/index'], extras)
    } else {
      this.showToastMessage('Login incorrecto', 'danger')
    }
  }

  async showToastMessage(message: string, color: string){
    const toast = await this.toastController.create({
      duration: 3000,
      message,
      color: color,
      position: 'bottom'
    });
    toast.present()
  }
}
