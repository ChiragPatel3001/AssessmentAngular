import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  setToken(token: string){
    localStorage.setItem('token', token) 
  }

  getToken(token: string){
    localStorage.removeItem(token) 
  }

  loginData(creds: login): Observable<any>{
    return this.http.post<any>(`http://localhost:3001/login`,creds)
  }
}
