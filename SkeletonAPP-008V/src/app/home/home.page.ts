import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  edLevels: Map<string, string> = new Map<string, string>

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      console.log(`User: ${state['user']}`)
      this.username = state['user'];
    }

    this.edLevels.set('pre', 'Pre Basica');
    this.edLevels.set('basic', 'Ed Basica');
    this.edLevels.set('medium', 'Ed Media');
    this.edLevels.set('superior', 'Ed Superior');
    this.edLevels.set('post', 'Postgrado');
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: `Datos del usuario: ${this.name} ${this.lastname}`
    });
    alert.present();
  }

  clean(){
    this.birthday = '';
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
  }

}
