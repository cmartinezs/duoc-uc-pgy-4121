import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  async getWeather() {
    const params = {
      "latitude": -33.4994005,
      "longitude": -70.6172758,
      "daily": ["temperature_2m_max", "temperature_2m_min", "sunrise", "sunset"],
      "timezone": "America/Sao_Paulo",
      "forecast_days": 1
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();
    
    const daily = response.daily()!;
    
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
    
      daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
          (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2mMax: daily.variables(0)!.valuesArray()!,
        temperature2mMin: daily.variables(1)!.valuesArray()!,
        sunrise: daily.variables(2)!.valuesArray()!,
        sunset: daily.variables(3)!.valuesArray()!,
      },
    
    };
    
    // `weatherData` now contains a simple structure with arrays for datetime and weather data
    for (let i = 0; i < weatherData.daily.time.length; i++) {
      console.log(
        weatherData.daily.time[i].toISOString(),
        weatherData.daily.temperature2mMax[i],
        weatherData.daily.temperature2mMin[i],
        //weatherData.daily.sunrise[i],
        //weatherData.daily.sunset[i]
      );
    }
  }
}
