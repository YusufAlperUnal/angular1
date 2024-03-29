import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RoleComponent} from "./role.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path:"",
    component:RoleComponent
  }
];

@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes), FormsModule
  ]
})
export class RoleModule { }
