import {Component,OnInit, OnDestroy } from '@angular/core';
import {RoleService} from "../../libs";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {SubSink} from "subsink";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, OnDestroy {
rolesData = [];
subs1: Subscription;
subs2: Subscription;
private subs= new SubSink()
  constructor(private roleService: RoleService) { }

  ngOnInit() {
    this.getRoles()
  }
  ngOnDestroy(){
    this.subs1.unsubscribe();
    this.subs2.unsubscribe();
  }
 getRoles(){
 this.subs1=this.roleService.getAllRoles().subscribe(response=>{
   console.log(response)
   this.rolesData = response[0].data;
 })
   this.subs1.add(this.subs2);
 }

 addNewRole(roleForm:NgForm){
   this.subs2= this.roleService.addRole(roleForm.value).subscribe(data=>{
      this.rolesData.push(data)
    },error=>{
      console.log(error)
      alert("Bir şeyler ters gitti1");
   })
 }
  editNewRole(roleForm:NgForm){
    this.roleService.editRole(roleForm.value).subscribe(data=>{
      this.getRoles();
    },error=>{
      console.log(error)
      alert("Bir şeyler ters gitti2");
    })
  }
  deleteRole(roleForm:NgForm){
    this.roleService.deleteRole(roleForm.value).subscribe(data=>{
      this.getRoles();
    },error=>{
      console.log(error)
      alert("Bir şeyler ters gitti3");
    })
  }
}
