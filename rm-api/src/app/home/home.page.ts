import { Component, OnInit } from '@angular/core';
import { ApiRickMortyService } from '../services/api-rick-morty.service';
import { Info } from '../models/info';
import { Character } from '../models/character';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  info!: Info;
  results!: Character[];

  constructor(
    private api: ApiRickMortyService
  ) {}

  ngOnInit(): void {
    this.api.getCharacters().subscribe((data) => {
      this.info = data.info;
      this.results = data.results;
      console.log('INFO: ', data.info);
      console.log('RESULTS: ', data.results);
    });
  }
}
