import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyFile } from './file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiLink:string;

  constructor(private http:HttpClient) { 
    this.apiLink = environment.baseURL;
  }

  getFiles():Observable<MyFile[]>{
    return this.http.get<MyFile[]>(`${this.apiLink}/files`)
  }

  addFiles(file:MyFile):Observable<MyFile>{
    return this.http.post<MyFile>(`${this.apiLink}/files`,file)
  }

  public deleteFiles(id: number): any{
    return this.http.delete<any>(`${this.apiLink}/files/${id}`)
  }
}
