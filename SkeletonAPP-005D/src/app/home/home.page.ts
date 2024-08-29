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
  username: string;
  password: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {
    this.message = 'Bienvenido desde Angular!';
    this.username = 'user0'
    this.password = 'pwd0';
  }

  generateMessage(){
    return 'Bienvenido desde Angular! (funcion)';
  }

  async validateLogin(){
    console.log("Ejecutando validacion!")

    const userdata: string = 'admin';
    const pwddata: string = '12345';

    if (userdata === this.username 
      && pwddata === this.password) {
      this.showToastMessage('Login exitoso', 'success')
      const extras: NavigationExtras = {
        state: {
          username: this.username
        }
      }

      this.router.navigate(['/index'], extras)
    } else {
      this.showToastMessage('Login erroneo', 'danger')
    }
  }

  async showToastMessage(message: string, color: string){
    const toast = await this.toastController.create({
      duration: 3000,
      message: message,
      position: 'bottom',
      color: color
    });
    toast.present();
  }
}
