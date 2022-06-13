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
    favorite_place_image:"https://sifirarabafiyatlari.net/wp-content/uploads/2021/08/bmw-840i-gran-coupe.png",
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
