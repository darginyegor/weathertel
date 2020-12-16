import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private get(url: string, params?: HttpParams | { [param: string]: string | string[]; }) {
    return this.http.get(`${environment.openWeatherApiUrl}${url}`, {
      params: params
    });
  }

  public getForecast(city: string, units: 'metric' | 'standard' | 'imperial' = 'metric') {
    return this.get('forecast', {
      q: city,
      units,
      lang: 'ru'
    });
  }
}
