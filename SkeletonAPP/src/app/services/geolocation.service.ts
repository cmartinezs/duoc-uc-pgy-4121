import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPosition() {
    return Geolocation.getCurrentPosition();
  }

  getAddress(lat: number, lng: number) {
    return this.http.get<any>(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
  }
}
