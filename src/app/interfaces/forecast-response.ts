import { WeatherItem } from './weather-item';

export interface ForecastResponse {
    city: {
        id: number,
        name: string,
        country: string,
        population: number,
        sunrise: number,
        sunset: number,
        timezone: number,
        coord: {
            lat: number,
            lon: number
        }
    },
    cnt: number,
    cod: string,
    message: number,
    list: WeatherItem[]
}
