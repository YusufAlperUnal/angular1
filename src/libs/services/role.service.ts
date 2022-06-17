import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observer} from "rxjs";
import * as http from "http";

interface RoleModel {
  id: number;
  name: string;
};


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  connection = environment.api.nestjs.role + "role"

  constructor(private http: HttpClient) {
  }

  getAllRoles() {
    return this.http.get<any>(this.connection + "?limit=25")
  }
  addRole(role: RoleModel){
    return this.http.post<any>(this.connection, role);
  }
  editRole({id, name}: RoleModel){
    return this.http.put<any>(this.connection+ `/${id}`, {name})
  }
  deleteRole({id, name}: RoleModel){
    return this.http.delete<any>(this.connection+ `/${id}`, {})
  }
}
