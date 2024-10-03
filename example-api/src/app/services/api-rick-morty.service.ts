import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResponse } from '../models/character.response';

@Injectable({
  providedIn: 'root'
})
export class ApiRickMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get<CharacterResponse>('https://rickandmortyapi.com/api/character');
  }
}
