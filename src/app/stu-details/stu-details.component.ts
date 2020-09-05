import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { StudentsService } from '../students.service';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';

@Component({
  selector: 'app-stu-details',
  templateUrl: './stu-details.component.html',
  styleUrls: ['./stu-details.component.scss']
})
export class StuDetailsComponent implements OnInit {

  stuAllDetails = [];
  resultDetail;
  constructor(private stuCompDetails : StudentsService, private location: Location) { }

  ngOnInit(): void {

     this.stuCompDetails.serviceRecordProvider$.subscribe(  result => { 
      this.resultDetail = result;
     }
    
    )};
  goBack(): void {
    this.location.back();
  }
  
}
