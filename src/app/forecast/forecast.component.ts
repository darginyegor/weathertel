import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WeatherItem } from '../interfaces/weather-item';

@Component({
  selector: 'wt-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  city: string;
  forecast: WeatherItem[];
  cityNotFoundError: boolean;
  error: boolean;

  constructor(
    private api: ApiService
  ) { }

  getForecast(): void {
    this.api.getForecast(this.city).subscribe(
      (response: any) => {
        this.forecast = response.list;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    
  }

}
