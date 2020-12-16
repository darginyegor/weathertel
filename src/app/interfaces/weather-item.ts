export interface WeatherItem {
    dt: number;
    dt_txt: string;
    pop: number;
    visibility: number;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        temp_kf: number;
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
    };
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        speed: number;
        deg: number;
    }
}
