import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormControl,  FormGroup } from '@angular/forms';
import {LoginService} from '../login.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  errorMsg:string;
  isCorrect:boolean = true;
  loginErrorMessage = "";
  signupModalRef : NgbModalRef  = null;
  loginModalRef : NgbModalRef  = null;
  forgotPassModalRef : NgbModalRef = null;
  roles: any = ['student','admin']

  isLoggedIn = false;
  loggedInUserName;

  loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
    });

  signupForm = new FormGroup({
      email : new FormControl(''),
      name : new FormControl(''),
      role : new FormControl(''),
      password : new FormControl(''),
      check : new FormControl(''),
  });
  forgetPassForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    
  });


  closeResult: string;
  constructor(private modalService: NgbModal, private router: Router, private signUpService : LoginService, private loginService : LoginService, private changePassService: LoginService) { }

  ngOnInit(): void {
    
  }

  openLoginModal(content) { 
    this.loginModalRef =  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered: true, backdropClass: 'modalBgColor'});

    if (this.signupModalRef) {
    this.signupModalRef.close();
    }
  };
  openSignupModal(content) {
    this.signupModalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdropClass: 'modalBgColor'})
  };
  openForgetPasswordModal(content) {
    this.forgotPassModalRef =  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered: true, backdropClass: 'modalBgColor'});

    if(this.loginModalRef) {
      this.loginModalRef.close();
    }
  };
  
  onLogin() {
    this.loginService.getLoginDetails(this.loginForm.value).subscribe(
      (data) => {
        this.loggedInUserName = this.loginForm.value.name;
        this.isLoggedIn = true;
        this.isCorrect = false;
      },
      (error) => {                              
        this.loginErrorMessage = error.error.error;
        this.isCorrect = true;
      }
    );
    if(this.loginModalRef) {
      this.loginModalRef.close();
    }

}
  onSignUp() {
    this.signUpService.getsignUpDetails(this.signupForm.value).subscribe(
      (data) => {
        this.isCorrect = false;
      },
      (error) => {
        this.errorMsg = error.error.error;
        console.log(error.error.error);
      }
    );
    if (this.signupModalRef) {
      this.signupModalRef.close();
      }
      this.signupForm.reset();
  }
  onForgetPassword() {
     this.changePassService.changePassReq(this.forgetPassForm.value).subscribe(
      (data) => {
        this.isCorrect = false;
      },
      (error) => {
        this.errorMsg = error.error.error;
        console.log(error.error.error);
      }
    );
    if(this.forgotPassModalRef) {
      this.forgotPassModalRef.close();
    }
  }
  

}
