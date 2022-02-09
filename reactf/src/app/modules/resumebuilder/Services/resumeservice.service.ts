import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { resumedetails } from '../Resume-Model/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  apilink: string

  constructor(private http: HttpClient) {
    this.apilink = environment.baseURL
  }
  getResumeinfo(id: number):Observable<resumedetails>{
    return this.http.get<resumedetails>(`${this.apilink}/resumeinfo/${id}`)
  }
}
