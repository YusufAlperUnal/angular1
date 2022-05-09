import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {IgxIconModule, IgxNavbarModule, IgxNavigationDrawerModule} from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      easing: 'ease-in',
      closeButton: false,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
      positionClass: 'toast-bottom-left'
    }),
    NgxSpinnerModule,
    IgxIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
