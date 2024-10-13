import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profilesUrl = 'http://localhost:3000/profiles';
  constructor(
    private readonly http: HttpClient,
  ) { }

  findByUsername(username: string) {
    return this.http.get<Profile[]>(`${this.profilesUrl}?username=${username}`);
  }
}
