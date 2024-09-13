import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = 'guest';
  name!: string;
  lastname!: string;
  edLevel!: string;
  birthday!: string;

  alertButtons: string[] = ['Ok']

  edLevels: Map<string, string> = new Map<string, string>

  constructor(
    private loginService: LoginService,
    private alertController: AlertController,
    private router: Router
  ) {

    const user = this.loginService.getLoggedUser()
    if (user) {
      console.log(`User: ${user.username}`)
      this.username = user.username;
    }

    this.edLevels.set('pre', 'Pre Basica');
    this.edLevels.set('basic', 'Ed Basica');
    this.edLevels.set('medium', 'Ed Media');
    this.edLevels.set('superior', 'Ed Superior');
    this.edLevels.set('post', 'Postgrado');
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: '[Controller]',
      message: `Datos del usuario: ${this.name} ${this.lastname}`,
      buttons: this.alertButtons
    });
    alert.present();
  }

  clean(){
    this.birthday = '';
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
