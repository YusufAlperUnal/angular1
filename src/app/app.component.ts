import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alper-angular-course1';
  constructor(private toastr: ToastrService, 
    private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.showSuccess()
    this.showSpinner()
  }
  showSuccess(){
    this.toastr.success("Angular Projeme Hoşgeldiniz",'Giriş Başarılı !');
  } 

  showSpinner(){
    this.spinner.show();
    setTimeout(() => {
    this.spinner.hide()
  }, 5000);
  }
}
