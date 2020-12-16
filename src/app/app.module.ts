import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherListComponent } from './forecast/weather-list/weather-list.component';
import { WeatherItemComponent } from './forecast/weather-list/weather-item/weather-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppIdInterceptor } from './interceptors/app-id.interceptor';

import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

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
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AppIdInterceptor,
      multi   : true
    },
    {
      provide: LOCALE_ID, 
      useValue: 'ru'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
