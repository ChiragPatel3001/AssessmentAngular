import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileListPresenterService {
  private onDelete : Subject<number>;
  public onDelete$ : Observable<number>;
  constructor() {
    this.onDelete = new Subject();
    this.onDelete$ = new Observable();
    this.onDelete$ = this.onDelete.asObservable();
   }
  public showFile(content: string, type: string) {
    let base64 = content.split(',')[1];
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    const url = URL.createObjectURL(blob);
    window.open(url);
  }

  public deletefile(id: number){
    this.onDelete.next(id);
  }
}
