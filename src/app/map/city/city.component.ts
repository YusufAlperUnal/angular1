import { Component, OnInit } from '@angular/core';
import {MapService} from "../../../libs";
import {map} from "rxjs";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
citiesData;
  constructor(private mapService: MapService) {
    mapService.cityNameSubject.subscribe(data=>{
      this.citiesData=data
    })
  }
  ngOnInit(): void {
  this.mapService.getCityNames()
  }

}
