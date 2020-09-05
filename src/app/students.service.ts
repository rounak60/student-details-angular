import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../app/tableList';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public myData: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>(null);
  serviceRecordProvider$ = this.myData.asObservable();
  
  getStuDetails(student) {
    this.myData.next(student);
  }
  
  constructor(private http: HttpClient ) {}

  getStudents(): Observable<Students[]> {
    return this.http.get<Students[]>('http://localhost:3001/school/student-details');
  }

  editDetailsPostReq(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3001/student-details', data);  
  }
   
}
