import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserData } from 'src/app/models/user-data';
import { StorageService } from 'src/app/services/storage.service';

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
    private alertController: AlertController,
    private storageService: StorageService
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
    const promise = this.storageService.get(`user_data_${this.username}`);
    console.log("promise: ", promise);
    if(promise !== undefined){
      promise.then((data) => {
        console.log("user_data: ", data);
        if(data !== null){
          this.name = data.name;
          this.lastname = data.lastname;
          this.edLevel = data.edLevel;
          this.birthday = data.birthday;
        }
      });
    }
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
    this.birthday = '';
  }

  save() {
    const userData = new UserData(this.name, this.lastname, this.edLevel, this.birthday);
    const promise = this.storageService.set(`user_data_${this.username}`, userData);
    if(promise !== undefined){
      promise.then(() => {
        console.log('Datos guardados')
      })
    }
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
