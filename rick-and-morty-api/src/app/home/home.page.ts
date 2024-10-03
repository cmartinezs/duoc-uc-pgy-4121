import { Component, OnInit } from '@angular/core';
import { ApiRamService } from '../services/api-ram.service';
import { Info } from '../models/info';
import { Result } from '../models/result';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  info!: Info;
  results!: Result[];

  constructor(
    private api: ApiRamService
  ) {
  }

  ngOnInit() {

    this.api.getCharacters().subscribe((data) => {
      this.info = data.info;
      this.results = data.results;
      console.log(data);
    });
  }
}
