import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherListComponent } from './forecast/weather-list/weather-list.component';
import { WeatherItemComponent } from './forecast/weather-list/weather-item/weather-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppIdInterceptor } from './interceptors/app-id.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    WeatherListComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AppIdInterceptor,
      multi   : true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
