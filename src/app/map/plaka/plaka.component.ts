import { Component, OnInit } from '@angular/core';
import {MapService} from "../../../libs";

@Component({
  selector: 'app-plaka',
  templateUrl: './plaka.component.html',
  styleUrls: ['./plaka.component.scss']
})
export class PlakaComponent implements OnInit {
  plakaData;




  constructor(private mapService: MapService) {
    mapService.cityPlakaSubject.subscribe(data=>{
      this.plakaData= data
    })
  }

  ngOnInit(): void {
    this.mapService.getCityPlakas()
  }

}
