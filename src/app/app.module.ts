import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherListComponent } from './forecast/weather-list/weather-list.component';
import { WeatherItemComponent } from './forecast/weather-list/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    WeatherListComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
