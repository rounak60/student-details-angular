import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stu-details',
  templateUrl: './stu-details.component.html',
  styleUrls: ['./stu-details.component.scss']
})
export class StuDetailsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {    
    }
  goBack(): void {
    this.location.back();
  }
  
  
}
