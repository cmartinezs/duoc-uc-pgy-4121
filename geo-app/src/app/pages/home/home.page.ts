import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  qualityStatus: string = 'BAD';

  constructor(
    private readonly networkService: NetworkService,
    private readonly weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
      this.networkService.startMonitoring();
      this.networkService.subscribeQualityStatus((status: string) => {
        console.log(`Quality status: ${status}`);
        this.qualityStatus = status
      });

      this.weatherService.getWeather().then(() => console.log('Weather data fetched'));
  }

}
