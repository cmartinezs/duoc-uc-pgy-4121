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

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      console.log(`User: ${state['user']}`)
      this.username = state['user'];
    }
  }

  async showInfo() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      
    });
    alert.present();
  }

}
