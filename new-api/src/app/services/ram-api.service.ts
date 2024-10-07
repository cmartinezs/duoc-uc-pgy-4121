import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RamGetResponse } from '../models/ram-get-response';

@Injectable({
  providedIn: 'root'
})
export class RamApiService {

  constructor(
    private http: HttpClient 
  ) { }

  getCharacters(pageNumber: number){
    return this.http.get<RamGetResponse>('https://rickandmortyapi.com/api/character?page=' + pageNumber);
  }
}
