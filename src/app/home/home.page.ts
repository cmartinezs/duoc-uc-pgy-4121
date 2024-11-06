import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    const coord = Geolocation.getCurrentPosition();
    coord.then(position => {
      const map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker(new L.LatLng(position.coords.latitude, position.coords.longitude), {
        icon: L.icon({
          iconUrl: '/assets/car-icon-vector-illustration.jpg',
          iconSize: [25, 41]
        })
      })
      .bindPopup('Estás Aquí')
      .openPopup()
      .addTo(map);

    });
  }

}
