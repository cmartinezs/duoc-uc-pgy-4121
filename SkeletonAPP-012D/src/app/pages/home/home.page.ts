import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

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
    private router: Router,
    private alertController: AlertController,
    private loginService: LoginService
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

  segmentChosen(e: any) {
    console.log(e.detail.value );
    this.selectedSegment = e.detail.value;
  }

  confirmLogout(){
    const alert = this.alertController.create({
      header: 'Cerrar Sesión',
      message: 'Está seguro de cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Cerrar Sesión',
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
