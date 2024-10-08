import { Component } from '@angular/core';
import { RamApiService } from '../services/ram-api.service';
import { Character } from '../models/character';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  results: Character[] = [];

  pageNumber: number = 1; 
  totalPages: number = 1;

  constructor(
    private ramApiService: RamApiService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.getCharacters();
  }

  backPage(){
    if (this.pageNumber <= 1) {
      console.log("No se puede retroceder más");
      this.alertController.create({
        header: 'Error',
        message: 'No se puede retroceder más',
        buttons: ['OK']
      }).then(alert => alert.present());
      return
    }
    this.pageNumber = this.pageNumber - 1;
    this.getCharacters();
  }

  forwardPage(){
    if (this.pageNumber >= this.totalPages) {
      console.log("No se puede avanzar más");
      this.alertController.create({
        header: 'Error',
        message: 'No se puede avanzar más',
        buttons: ['OK']
      }).then(alert => alert.present());
      return
    }
    this.pageNumber = this.pageNumber + 1;
    this.getCharacters();
  }

  async getCharacters(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    loading.present();
    this.ramApiService
      .getCharacters(this.pageNumber)
      .subscribe({
        next: (data) => {
          console.log("Data recibida:", data)
          this.totalPages = data.info.pages;
          this.results = data.results;
          loading.dismiss();
        }, 
        error: (error) => {
          console.error("Error al obtener los personajes:", error);
          loading.dismiss();
          const alert = this.alertController
            .create({
              header: 'Error',
              message: 'Error al obtener los personajes. ' + error.error.error,
              buttons: ['OK']
            })
            .then(alert => alert.present());
        }
      })
  }
}
