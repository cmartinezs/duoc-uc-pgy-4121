import { Component, OnInit } from '@angular/core';
import { ApiRickMortyService } from '../services/api-rick-morty.service';
import { Info } from '../models/apiclients/info';
import { Character } from '../models/apiclients/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  info!: Info;
  characters: Character[] = [];

  constructor(
    private api: ApiRickMortyService
  ) {}

  ngOnInit(): void {
    const obs = this.api.getCharacters();

    obs.subscribe((data) => {
      data.info;
      this.characters = data.results;
      console.log(data);
    });
  }

}
