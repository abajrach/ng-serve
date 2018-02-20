import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  public dailyForecast() {
    return this._http.get('http://samples.openweathermap.org/data/2.5/history/city?q=Munchen,DE&appid=b6907d289e10d714a6e88b30761fae22')
      .map(result => result);
  }

}
