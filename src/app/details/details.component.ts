import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Output() editClicked = new EventEmitter();
  stuAllDetails = [];
  resultDetail;
  @Input() hiddenEditIcon;
  constructor(private stuCompDetails : StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.stuCompDetails.serviceRecordProvider$.subscribe(  result => { 
      this.resultDetail = result;
    })
  }
  editDetails():void{
    this.editClicked.emit(true);
    this.router.navigate(['/edit-details']);
  }

}
