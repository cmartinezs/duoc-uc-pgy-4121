import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'guest'
  name: string = '';
  lastname: string = '';
  educationLevel: string = '';
  birthday: string = '';
  alertButtons = ['Ok'];

  educationLevels: Map<string, string> = new Map<string, string>();

  constructor(
    private router: Router,
    private alertController: AlertController,
  ) { 
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if(state){
      this.username = state['user'];
    }

    this.educationLevels.set("pre","Pre Escolar");
    this.educationLevels.set("basic","Ed basica");
    this.educationLevels.set("medium","Ed Media");
    this.educationLevels.set("superior","Ed Superior");
    this.educationLevels.set("post","Postgrado");
    this.educationLevels.set("doctor","Doctorado");
  }

  ngOnInit() {
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.educationLevel = '';
    this.birthday = '';
  }

  async showInfo(){
    const alert = await this.alertController.create({
      header: 'Usuario',
      subHeader: '[controller]',
      message: `El nombre del usuario es ${this.name} ${this.lastname}`,
      buttons: this.alertButtons
    });
    alert.present();
  }

}
