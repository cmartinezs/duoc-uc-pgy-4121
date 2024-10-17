import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from "../../models/user";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { GeolocationService } from 'src/app/services/geolocation.service';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message: string;
  username!: string;
  password!: string;
  latitude: number = 0;
  longitude: number = 0;
  address: string = '';

  constructor(
    private readonly toastController: ToastController,
    private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly geoService: GeolocationService
  ) {
    this.message = 'Bienvenido!'
  }

  ngOnInit(): void {
    this.geoService
      .getPosition()
      .then(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        return {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
      .then((latLng: {lat: number, lng: number}) => {
        return firstValueFrom(this.geoService.getAddress(latLng.lat, latLng.lng));
      })
      .then(address => {
        this.address = address.display_name;
      });
  }

  validateLogin() {
    console.log("Executing login validation")

    this.loginService
      .authenticate(this.username, this.password)
      .then(user => {
        this.authenticateHandler(user);
      })
      .catch(err => {
        console.log('Error on login: ', err)
        this.failedAuthentication();
      });
  }

  private authenticateHandler(user: User | null) {
    user ? this.successAuthentication() : this.failedAuthentication()
  }

  private failedAuthentication(message: string = 'Failed login') {
    this.generateMessage(message, 'danger')
      .then(() => { console.log('Failed login') });
  }

  private successAuthentication() {
    this.generateMessage('Success login', 'success')
      .then(() => {
        console.log('Success login');
        return this.router.navigateByUrl('/home')
      })
      .then(() => console.log('Navigated to home'));
  }

  async generateMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'middle',
      color: color
    });
    await toast.present();
  }
}

