import { Component } from '@angular/core';
import { ApiRickMortyService } from '../services/api-rick-morty.service';
import { Character } from '../models/character';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  characters: Character[] = [];
  pageNumber: number = 1;
  totalPage: number = 0;

  constructor(
    private api: ApiRickMortyService,
    private alertController: AlertController
  ) {
    this.loadCharacters();
  }

  loadCharacters() {
    this.api
      .getCharacters(this.pageNumber)
      .subscribe({
        next: data => {
          console.log("Data log: ", data)
          this.totalPage = data.info.pages;
          this.characters = data.results;
        },
        error: error => {
          console.error("Error log: ", error)
          this.alertController.create({ 
            header: 'Error',
            message: 'No se pudo cargar los personajes',
            buttons: ['OK']
          }).then(a => a.present());
        },
      });
  }

  backPage(){
    if(this.pageNumber > 1){
      this.pageNumber--;
      this.loadCharacters()
    } else {
      console.log("No hay página anterior");
      this.alertController.create({ 
        header: 'Error',
        message: 'No hay página anterior',
        buttons: ['OK']
      }).then(a => a.present());
    }
  }

  forwardPage(){
    if (this.pageNumber < this.totalPage) {
      this.pageNumber++;
      this.loadCharacters()
    } else {
      console.log("No hay página siguiente");
      this.alertController.create({ 
        header: 'Error',
        message: 'No hay página siguiente',
        buttons: ['OK']
      }).then(a => a.present());
    }
  }
}
