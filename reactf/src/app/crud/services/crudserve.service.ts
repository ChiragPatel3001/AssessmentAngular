import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, User } from '../Model/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudserveService {

  apilink: string

  constructor(private http: HttpClient) {
    this.apilink= environment.baseURL
   }
  getdepartment():Observable<Department[]>{
    return this.http.get<Department[]>(`${this.apilink}/Department`)
  }
  addData(FormData: User):Observable<User>{
    return this.http.post<User>(`${this.apilink}/users`,FormData)
  }
  getData():Observable<User>{
    return this.http.get<User>(`${this.apilink}/users`)
  }
  deleteData(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apilink}/users/${id}`)
  }
  getId(id:number):Observable<User>{
    return this.http.get<User>(`${this.apilink}/users/${id}`)
  }
  editData(id:number, edittedData: User):Observable<User>{
    return this.http.put<User>(`${this.apilink}/users/${id}`,edittedData)
  }
}
