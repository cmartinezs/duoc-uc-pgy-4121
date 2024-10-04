import { Component, OnInit } from '@angular/core';
import { ApiRamService } from '../services/api-ram.service';
import { Info } from '../models/info';
import { Result } from '../models/result';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  info!: Info;
  results!: Result[];
  pageNumber: number = 1;

  constructor(
    private api: ApiRamService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
  }

  ngOnInit() {
    this.loadPage();
  }

  backPage() {
    this.pageNumber--;
    this.loadPage();
  }

  forwardPage() {
    this.pageNumber++;
    this.loadPage();
  }

  async loadPage() {
    const loader = await this.loadingController.create({
      message: 'Cargando...'
    });
    loader.present()
    this.api.getCharacters(this.pageNumber).subscribe((data) => {
      this.info = data.info;
      this.results = data.results;
      console.log(data);
      loader.dismiss();
    }, (error) => {
      console.log(error);
      loader.dismiss();
      this.alertController.create({
        header: 'Error al cargar',
        message: error,
      })
      .then(a => a.present());
    });
  }
}
