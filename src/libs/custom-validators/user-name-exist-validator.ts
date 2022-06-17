import {FormControl} from "@angular/forms";
import {switchMap,timer, map} from "rxjs";

export const UserNameExistValidator =(
  userService: any,
  time : number=500,
)=>{
  return (input: FormControl) =>{
    return timer(time).pipe(
      switchMap(()=> userService.isExistName(input.value)),
      map(res=>{
        return !res ? null: {userNameExist: true};
      })
    );
  }
}
