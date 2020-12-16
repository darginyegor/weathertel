import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WeatherItem } from '../interfaces/weather-item';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'wt-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit, OnDestroy {

  city: string;
  forecast: WeatherItem[];
  cityNotFoundError: boolean;
  error: boolean;
  private queryParamsSubscription: Subscription;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  getForecast(): void {
    if (!this.city) {
      return;
    }
    this.forecast = [];
    this.cityNotFoundError = false;
    this.error = false;
    this.api.getForecast(this.city).subscribe(
      (response: any) => {
        this.forecast = response.list;
        this.router.navigate([], {
          queryParams: {
            city: this.city
          }
        });
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.cityNotFoundError = true;
        } else {
          this.error = true;
        }
      }
    );
  }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      params => {
        if (params.city && params.city != this.city) {
          this.city = params.city;
          this.getForecast();
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

}
