import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user={
    name:"Alper",
    surname:"Unal",
    favorite_place:"Ata Kule",
    favorite_place_image:"https://www.ekoyapidergisi.org/images/2020/Atakule5_1586425802.jpg",
    isEditable:true
  }
  type="text";
  constructor() { }

  ngOnInit(): void {
    }
    butonclicked(){
      alert("Tıklandı")
  }
  inputSubmit(value:any){
    console.log(value)
alert(value.target.value+ "   geldi...")
  }

}
