import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
// import {LoginService} from '../login.service';
import {StudentsService} from '../students.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  steps=[{name:'Student Details',heading:'Student Details', content: 'Please fill the following information' },
  {name:'Verify', heading:'Verify',content: 'Please verify the Student details' },
  {name:'Summary',heading:'Summary', content: 'Successfully changed the following student details' }]

  editedDetail;
  cancelDetail;
  hiddenIcon;
  buttonDisabled = true;
  isOptional = false;

  constructor(private location: Location, private studentDetail : StudentsService ) { }

  ngOnInit(): void {
    this.hiddenIcon = true;
  }
  goBack(): void {
    this.location.back();
  }
  enableContinue(event){
    this.editedDetail = event;
  }
  restoreData(event){
    this.cancelDetail = event;
    if(JSON.stringify(this.editedDetail) == JSON.stringify(this.cancelDetail)){
    this.buttonDisabled = true;
    }
    else{
      this.buttonDisabled = false;
    }
  }  
  editAgain(stepper:MatStepper){
    stepper.previous();
  }
  editedValue(){
    this.studentDetail.editDetailsPostReq(this.editedDetail).subscribe(
      (data) => {
        console.log(data);
      },
    );
  }
  changeEditedValue(){
      this.studentDetail.getStuDetails(this.editedDetail);
  }
  changeCanceledValue(){
    this.studentDetail.getStuDetails(this.cancelDetail);
    this.location.back();
  }
}
