import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mvpclient } from '../../../mvp-demo-model';

@Injectable({
  providedIn: 'root'
})
export class FilterListPresenterService {
  filterForm: FormGroup;

  private filterform: Subject<mvpclient>
  public filterform$: Observable<mvpclient>

  constructor(private fb: FormBuilder) {
    this.filterform = new Subject();
    this.filterform$= new Observable();

    this.filterform$ = this.filterform.asObservable();
   }

   onsubmit(mvpclient: FormGroup){
    console.log("Helll");
    this.filterform.next(mvpclient.value)
  }

  filterData(){
    return this.filterForm = this.fb.group(
      {
        name: ['', Validators.required],
        age: ['',Validators.required],
        gender: ['',Validators.required],
      }
    )
  }
}
