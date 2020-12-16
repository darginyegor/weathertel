import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from 'src/app/interfaces/weather-item';

@Component({
  selector: 'wt-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {

  @Input() item: WeatherItem;

  constructor() { }

  ngOnInit(): void {
  }

}
