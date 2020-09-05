import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';


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
  closeResult: string;

  loginForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
    });

  signupForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      name : new FormControl(''),
      role : new FormControl(''),
      password : new FormControl(''),
      check : new FormControl(''),
  });
  forgetPassForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl(''),
  });

  constructor(private modalService: NgbModal, private router: Router, private signUpService : LoginService, private loginService : LoginService, private changePassService: LoginService) { }

  ngOnInit(): void {
  }

  openLoginModal(content) { 
    this.loginModalRef =  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered: true, backdropClass: 'modalBgColor'});

    if (this.signupModalRef) {
    this.signupModalRef.close();
    }
    this.loginForm.reset();
  };
  openSignupModal(content) {
    this.signupModalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdropClass: 'modalBgColor'});
    this.signupForm.reset();
  };
  openForgetPasswordModal(content) {
    this.forgotPassModalRef =  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',centered: true, backdropClass: 'modalBgColor'});

    if(this.loginModalRef) {
      this.loginModalRef.close();
    }
    this.forgetPassForm.reset();
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
    this.loginForm.reset();
}
  onSignUp() {
    this.signUpService.getsignUpDetails(this.signupForm.value).subscribe(
      (data) => {
        this.isCorrect = false;
      },
      (error) => {
        this.errorMsg = error.error.error;
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
      }
    );
    if(this.forgotPassModalRef) {
      this.forgotPassModalRef.close();
    }
    this.forgetPassForm.reset();
  }
  get validateEmail(){
    return this.signupForm.get('email')
  }
  get validateForPassEmail() {
    return this.forgetPassForm.get('email');
  }
}
