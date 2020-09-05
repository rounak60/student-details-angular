import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { FormControl,  FormGroup, FormBuilder, Validators } from '@angular/forms';
import {StudentsService} from '../students.service';

@Component({
  selector: 'app-edit-stepper',
  templateUrl: './edit-stepper.component.html',
  styleUrls: ['./edit-stepper.component.scss']
})
export class EditStepperComponent implements OnInit {
  stepperEditForm = new FormGroup({
    Name : new FormControl(''),
    Class : new FormControl(''),
    Division : new FormControl(''),
    Rank : new FormControl(''),
    Fee : new FormControl(''),
    DueDate : new FormControl(''),
    ContactNo : new FormControl(''),
    Address : new FormControl(''),
  });

  constructor( private studentService : StudentsService, private formbuilder: FormBuilder) { }
  students;
  RegestrationNo;
  @Output() continueButtonEnable = new EventEmitter();
  @Output() restorePreviousData = new EventEmitter();
  ngOnInit(): void {
    this.studentService.serviceRecordProvider$.subscribe(  result => { 
      this.students = result;
      });

      this.stepperEditForm = this.formbuilder.group({
        Name :[this.students.Name,[Validators.required]],
        Class: [this.students.Class, [Validators.required]],
        Division: [this.students.Division, [Validators.required]],
        Rank: [this.students.Rank, [Validators.required]],
        Fee: [this.students.Fee, [Validators.required]],
        DueDate: [this.students.DueDate, [Validators.required]],
        ContactNo: [this.students.ContactNo, [Validators.required]],
        Address: [this.students.Address, [Validators.required]],
        Id:[this.students.Id],
        RegestrationNo:[this.students.RegestrationNo],
      })
  }

  valueChanged(){
      this.continueButtonEnable.emit(this.stepperEditForm.value);
      this.restorePreviousData.emit(this.students);
}

}
