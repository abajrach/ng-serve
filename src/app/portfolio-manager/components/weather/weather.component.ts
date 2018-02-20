import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../service/weather.service';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast()
      .subscribe(res => {
        // console.log(res);
        let temp_max = res ['list'].map(res => res.main.temp_max);
        let temp_min = res ['list'].map(res => res.main.temp_min);
        let alldates = res ['list'].map(res => res.dt);

        let weatherDates = [];
        alldates.forEach((res) => {
          let jsDate = new Date(res * 1000);
          weatherDates.push(jsDate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}));
        });

        // console.log(weatherDates);
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      });
  }

}
