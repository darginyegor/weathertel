# Weathertel

The app gets weather data from [OpenWeatherMap API](https://openweathermap.org/api) and displays a 5 days / 3 hours forecast. 

To communicate with the API you need to provide your OpenWeatherMap APP_ID (API key). It must be exported as a constant from `src/app/interceptors/app-id.const.ts`:

```TypeScript
export const APP_ID = 'YOUR_APP_ID';
```
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
