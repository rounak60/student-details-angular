import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StuTableComponent } from './stu-table/stu-table.component';
import { StuDetailsComponent } from './stu-details/stu-details.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditStepperComponent } from './edit-stepper/edit-stepper.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StuTableComponent,
    StuDetailsComponent,
    LoginModalComponent,
    SignupModalComponent,
    EditDetailsComponent,
    EditStepperComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
