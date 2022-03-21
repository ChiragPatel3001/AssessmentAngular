import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { SubjectData } from './subjectcom.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  saveData: Subject<SubjectData>
  saveData$: Observable<SubjectData>
  editData: Subject<SubjectData>
  editData$: Observable<SubjectData>
  constructor() {
    this.saveData = new Subject();
    this.saveData$ = this.saveData.asObservable();
    this.editData = new Subject();
    this.editData$ = this.editData.asObservable();
  }
  
  onSubmit(subjectData: SubjectData) {
    this.saveData.next(subjectData);
  }
 
  sendData(subjectData: SubjectData){
    this.editData.next(subjectData);
  }

}
