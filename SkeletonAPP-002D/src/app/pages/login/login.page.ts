import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
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
    private loginService: LoginService,
    private loadingController: LoadingController
  ) {
    this.message = 'Bienvenido!'
    this.loadingController.create({
      message: 'Cargando...'
    }).then(async loading => {
      loading.present()

      await this.loginService.init()

      

      setTimeout(() => {
        console.log('LoginService initialized');
        if (this.loginService.isAuthenticated()) {
          this.router.navigate(['/home']);
        }
        loading.dismiss()
      }, 1500);
    });
    
  }

  ngOnInit() {

  }


  validateLogin(){
    console.log("ejecutando validacion")

    const login = this.loginService.findByUsername(this.username);

    if(login === undefined){
      this.generateMessage('Usuario no existe', 'danger');
      return;
    }

    if (
      this.username === login.username &&
      this.password === login.password
    ) {
      this.generateMessage('Login correcto', 'success');
      this.loginService.registerLoggedUser(login);
      this.router.navigate(['/home']);
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
