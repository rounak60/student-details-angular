import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
// import {FormControl, FormGroup} from '@angular/forms';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  
//  stuLoginData = [];
//   loginForm = new FormGroup({
//     name : new FormControl(''),
//     password : new FormControl(''),
//   });
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }
  // submitClick(){
  //     this.loginService.getLoginDetails(this.loginForm.value)
  //     .subscribe(loginAllData => {this.stuLoginData = loginAllData}
  //     )
  //   }
}
