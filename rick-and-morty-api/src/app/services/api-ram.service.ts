import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharactersResponse } from '../models/characters-response';

@Injectable({
  providedIn: 'root'
})
export class ApiRamService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  }
}
