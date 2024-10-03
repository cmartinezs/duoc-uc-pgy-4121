import { Component, OnInit } from '@angular/core';
import { ApiRickMortyService } from '../services/api-rick-morty.service';
import { Character } from '../models/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  characters: Character[] = [];

  constructor(
    private api: ApiRickMortyService
  ) {}

  ngOnInit() {
    this.api.getCharacters().subscribe((data) => {
      this.characters = data.results;
      console.log(data);
    });
  }
}
