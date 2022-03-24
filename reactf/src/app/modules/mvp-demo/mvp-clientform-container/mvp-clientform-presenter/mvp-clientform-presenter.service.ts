import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mvpclient } from '../../mvp-demo-model';

@Injectable({
  providedIn: 'root'
})
export class MvpClientformPresenterService {
  private mvpform: Subject<mvpclient>
  public mvpform$: Observable<mvpclient>

  constructor() {
    this.mvpform = new Subject();
    this.mvpform$= new Observable();

    this.mvpform$ = this.mvpform.asObservable();
   }

   onsubmit(mvpclient: FormGroup){
     if(!mvpclient.valid){
      return
     }
     this.mvpform.next(mvpclient.value)
   }
}
