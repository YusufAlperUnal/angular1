import { Component, OnInit } from '@angular/core';
import {MapService} from "../../../libs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private  mapService: MapService) { }
  model = {
    id: null,
    plaka: '',
    name: '',
    region: ''
  }
  ngOnInit(): void {
  }
 save(form: any){
    console.log(form)
    this.mapService.save(form.value)
 }
}
