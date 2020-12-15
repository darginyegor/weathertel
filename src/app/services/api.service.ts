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
    console.log(environment.openWeatherApiUrl, `${environment.openWeatherApiUrl}/${url}`)
    return this.http.get(`${environment.openWeatherApiUrl}/${url}`, {
      params: params
    });
  }

  public getForecast(city: string) {
    return this.get('forecast', {
      q: city
    });
  }
}
