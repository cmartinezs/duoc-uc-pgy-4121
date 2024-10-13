import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import {ProfileService} from "../../services/profile.service";
import {firstValueFrom} from "rxjs";
import {User} from "../../models/user";

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
  alertButtons = ['Close'];
  segments: string[] = ['Experiencia Laboral', 'Certificaciones', 'Mis Datos']
  educationLevels: Map<string, string> = new Map<string, string>();
  selectedSegment: string = 'ion-sb-2';

  constructor(
    private readonly router: Router,
    private readonly alertController: AlertController,
    private readonly loginService: LoginService,
    private readonly profileService: ProfileService
  ) {
    this.educationLevels.set("pre","Pre Escolar");
    this.educationLevels.set("basic","Ed basica");
    this.educationLevels.set("medium","Ed Media");
    this.educationLevels.set("superior","Ed Superior");
    this.educationLevels.set("post","Postgrado");
    this.educationLevels.set("doctor","Doctorado");
  }

  ngOnInit() {
    const user = this.loginService.loggedUser
    if (user) {
      this.username = user.username;
      this.findProfile(user)
        .then(profiles => {
          if (profiles.length > 0) {
            const profile = profiles[0];
            this.name = profile.name || '';
            this.lastname = profile.lastname || '';
            this.educationLevel = profile.educationLevel || '';
            this.birthday = profile.birthday || '';
          }
        });
    }
  }

  private findProfile(user: User) {
    return firstValueFrom(this.profileService.findByUsername(user.username));
  }

  clean(){
    this.name = '';
    this.lastname = '';
    this.educationLevel = '';
    this.birthday = '';
  }

  async showInfo(){
    const alert = await this.alertController.create({
      header: 'User information',
      message: `User's name is ${this.name} ${this.lastname}`,
      buttons: this.alertButtons
    });
    await alert.present();
  }

  segmentChosen(e: any) {
    console.log(e.detail.value );
    this.selectedSegment = e.detail.value;
  }

  confirmLogout(){
    this.alertController.create({
      header: 'Close session',
      message: 'Are you sure to close session?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Close session',
          handler: () => {
            this.logout();
          }
        }
      ]
    })
    .then(a => a.present());
  }

  private logout(){
    this.loginService.logout()
    this.router.navigateByUrl('/login');
  }
}
