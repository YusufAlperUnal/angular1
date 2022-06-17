import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  title="AnKaRa TÜrkİYEniN bAşkEnTiDir";
  today="";
  cashValue=143.45;
  percentVal=100;
  cash=2332;
  objectVal: Object={
    foo:"bar",
    baz:"quz",
    nested:{xyz:3, numbers:[1,2,3,4,5]}
  }
  cityName="İstanbul";
  cities=[
    "İstanbul", "İzmir","Ankara", "edirne","samsun"," mersin"
  ]
  constructor() { }

  ngOnInit(): void {
    this.today= new Date().toDateString()
  }

}
