import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HighlightDirective} from "../../libs";

const routes: Routes = [
  {
    path:"",
    component:DirectivesComponent
  }
];


@NgModule({
  declarations: [
    DirectivesComponent, HighlightDirective
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
