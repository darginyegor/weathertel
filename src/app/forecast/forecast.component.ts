import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { WeatherItem } from '../interfaces/weather-item';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ForecastResponse } from '../interfaces/forecast-response';

type SortOrder = 'date' | 'tasc' | 'tdecs';

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
  sortBy: SortOrder = 'date';

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
      (response: ForecastResponse) => {
        this.forecast = response.list;
        if (this.sortBy != 'date') {
          this.sort();
        }
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

  setSort(event: Event): void {
    this.sort();
  }

  sort(): void {
    const sortOrders: {
      [order: string]: (a: WeatherItem, b: WeatherItem) => number
    } = {
      'date': (a, b) => {
        return b.dt - a.dt;
      },
      'tasc': (a, b) => {
        return a.main.temp - b.main.temp;
      },
      'tdesc': (a, b) => {
        return b.main.temp - a.main.temp;
      }
    };

    if (sortOrders[this.sortBy]) {
      this.forecast.sort(sortOrders[this.sortBy]);
    }
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
