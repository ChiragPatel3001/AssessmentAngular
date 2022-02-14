import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { userDetails,client } from '../User-Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {
  apilink: string
  constructor(private http:HttpClient) { 
    this.apilink= environment.baseURL
  }
  getclients():Observable<client[]>{
    return this.http.get<client[]>(`${this.apilink}/clients`)
  }
  getClientData():Observable<userDetails>{
    return this.http.get<userDetails>(`${this.apilink}/UserDetail`)
  }
  addClientData(ClientData: userDetails):Observable<userDetails>{
    return this.http.post<userDetails>(`${this.apilink}/UserDetail`,ClientData)
  }
  deleteClientData(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apilink}/UserDetail/${id}`)
  }
  getClientId(id:number):Observable<userDetails>{
    return this.http.get<userDetails>(`${this.apilink}/UserDetail/${id}`)
  }
  editClientData(id:number, edittedData: userDetails):Observable<userDetails>{
    return this.http.put<userDetails>(`${this.apilink}/UserDetail/${id}`,edittedData)
  }
}
