import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from 'src/app/interfaces/weather-item';

@Component({
  selector: 'wt-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  @Input() list: WeatherItem[];

  constructor() { }
  
  differentDays(prevItem, item): boolean {
    if (!prevItem) {
      return true;
    }
    let prevItemDate = new Date(prevItem.dt_txt).getDate();
    let itemDate = new Date(item.dt_txt).getDate();
    return prevItemDate !== itemDate;
  }

  ngOnInit(): void {
  }

}
