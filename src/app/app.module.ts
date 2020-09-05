import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StuTableComponent } from './stu-table/stu-table.component';
import { StuDetailsComponent } from './stu-details/stu-details.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StuTableComponent,
    StuDetailsComponent,
    LoginModalComponent,
    SignupModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
