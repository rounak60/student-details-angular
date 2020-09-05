import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-stu-table',
  templateUrl: './stu-table.component.html',
  styleUrls: ['./stu-table.component.scss']
})
export class StuTableComponent implements OnInit {

  studentDetails = []

  constructor(private studentsService : StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudents()
      .subscribe(studentList => { this.studentDetails = studentList} ) 
  }
  //studentDetails is the data(asynchornous) which we are assigning
  // to a property in component class as above
  onClick(student){
    this.studentsService.getStuDetails(student);
  }

}
