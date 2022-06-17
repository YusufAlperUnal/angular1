import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {BlacklistValidator, UserNameExistValidator, UserService, WhiteSpaceValidator} from "../../../libs";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  registerForm: FormGroup;
  constructor( private  UserService: UserService) {
  }

  ngOnInit(): void {
    this.resetForm();
    this.registerForm.statusChanges.subscribe(x => console.log(this.registerForm))
  }
  save(event){
    console.log(event)
  }
  resetForm(){
    this.registerForm = new FormGroup({
      username: new FormControl("",{
        validators:[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          BlacklistValidator("ğ"),
          WhiteSpaceValidator,
        ],
        asyncValidators:[UserNameExistValidator(this.UserService)],
        updateOn: "blur"
      }),
        age: new FormControl("")
    });
  }
}
