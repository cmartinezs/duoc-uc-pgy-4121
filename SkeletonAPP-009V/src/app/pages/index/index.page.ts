import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

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
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state){
      console.log(`Username: ${state['user']}`)
      this.username = state['user']
    }
    this.edLevels.set('0', 'Basica');
    this.edLevels.set('1', 'Media');
    this.edLevels.set('2', 'Superior');
  }

  ngOnInit() {
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
    this.birthday = '';
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: "Usuario",
      subHeader: "Datos del usuario",
      message: `Los datos del usuario son ${this.name} ${this.lastname}`
    })
    alert.present();
  }
}
