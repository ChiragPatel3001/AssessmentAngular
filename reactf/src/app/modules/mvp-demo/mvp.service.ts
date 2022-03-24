import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { mvpclient } from './mvp-demo-model';

@Injectable({
  providedIn: 'root'
})
export class MvpService {
  apilink: string
  constructor(private http: HttpClient) { 
    this.apilink= environment.baseURL;
  }
  public getmvpClient(): Observable<mvpclient[]> {
    return this.http.get<mvpclient[]>('http://localhost:3000/mvpUser')
  }
  public getmvpclientbyId(id: string): Observable<mvpclient> {
    return this.http.get<mvpclient>(`http://localhost:3000/mvpUser/${id}`)
  }
  public mvpDelete(id: number): any{
    return this.http.delete<any>(`http://localhost:3000/mvpUser/${id}`)
  }
  public saveData(mvpclient: mvpclient): any {
    return this.http.post<any>('http://localhost:3000/mvpUser/',mvpclient)
  }
  public edditedData(mvpclient: mvpclient, id: string): any {
    return this.http.put<any>(`http://localhost:3000/mvpUser/${id}`,mvpclient)
  }
}
