import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

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
    private router: Router,
    private loginService: LoginService
  ) {
    this.message = 'Bienvenido!'
  }

  ngOnInit() {
  }

  validateLogin(){
    console.log("ejecutando validacion")

    if (
      this.loginService.validateLogin(this.username, this.password)
    ) {
      this.generateMessage('Login correcto', 'success');
      let extras: NavigationExtras = {
        state: { 
          user: this.username 
        }
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
      position: 'middle',
      color: color
    });
    await toast.present();
  }
}
