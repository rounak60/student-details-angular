import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Login } from '../app/loginCreds'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  getLoginDetails(data: any) : Observable<any> {
    return this.http.post<any>('http://localhost:3001/login', data);
  }

  getsignUpDetails(data : any) : Observable<any> {
    return this.http.post<any>('http://localhost:3001/addUser', data);  
  }

  changePassReq(data: any) : Observable<any> {
    return this.http.put<any>('http://localhost:3001/changePassword', data);
  }

  
}
