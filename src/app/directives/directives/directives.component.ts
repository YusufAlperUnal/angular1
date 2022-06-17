import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  color="";
    title=false;
    name="";
    username="";
    cities=[
      {
        id:1,
        name:"İstanbul",
        region:"Marmara"
      },
      {
        id:3,
        name:"Ankara",
        region:"İç Anadolu"
      },
      {
        id:6,
        name:"İzmir",
        region:"Ege"
      },
      {
        id:9,
        name:"Konya",
        region:"İç Anadolu "
      }
    ]
  constructor() { }

  ngOnInit(): void {
  }
changeTitle(){
    this.title=!this.title
}
}
