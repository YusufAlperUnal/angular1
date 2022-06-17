import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input() data;
  @Output() resetForm: EventEmitter<any> = new  EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
emitForm(event){
    this.resetForm.emit(event)
}
alertSth(){
    alert("Child componenti tetiklediniz.")
  this.data={
      name:"triggred",
      status:true
  };
}
}
