import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message: string;
  username!: string;
  password!: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {
    this.message = 'Bienvenido!'
  }

  ngOnInit() {
  }

  validateLogin(){
    console.log("ejecutando validacion")

    const usernameValidation: string = 'admin';
    const passwordValidation: string = '12345';

    if (
      this.username === usernameValidation &&
      this.password === passwordValidation
    ) {
      this.generateMessage('Login correcto', 'success');
      let extras: NavigationExtras = {
        state: { user: this.username }
      }
      this.router.navigate(['/home'], extras);
    } else {
      this.generateMessage('Login fallido', 'danger');
    }
  }
  async generateMessage(message: string, color: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    await toast.present();
  }

}
