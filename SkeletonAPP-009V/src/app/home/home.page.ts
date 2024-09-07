import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    this.mainTitle = 'SkeletonAPP-009V!!!';
    this.subTitle = 'Aqui comienza!!!';
    this.welcomeMessage = 'Bienvenido!!'
  }

  validateLogin(){
    console.log("Ejecutando validacion!")
    if(this.username === 'admin'
      && this.password === '12345') {
      this.showToastMessage('Inicio de sesion valido', 'success')
      this.welcomeMessage = `Bienvenido ${this.username}`;

      const extras = this.createExtrasUser(this.username);
      this.router.navigate(['/index'], extras);
    } else {
      this.showToastMessage('Inicio de sesion invalido', 'danger')
    }
  }

  createExtrasUser(u: string): NavigationExtras | undefined {
    return {
      state: {
        user: u
      }
    }
  }

  async showToastMessage(text: string, msgColor: string){
    const toast = await this.toastController.create({
      message: text,
      color: msgColor,
      position: 'bottom',
      duration: 3000
    })
    toast.present();
  }
}
