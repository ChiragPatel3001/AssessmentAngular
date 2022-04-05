import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MyFile } from '../file.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {
  private file: MyFile;
  private fileUpload: Subject<MyFile>;
  public fileUpload$: Observable<MyFile>;

  constructor() {
    this.file = {} as MyFile;
    this.fileUpload = new Subject<MyFile>();
    this.fileUpload$ = new Observable<MyFile>();
    this.fileUpload$ = this.fileUpload.asObservable();
  }
  allowedFileType=["image/png","image/jpeg","image/svg"]
  uploadFile(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      let size = Math.round(files[i].size / 1024 / 1024)
      const file = {} as MyFile;
      if(size<=2 && this.allowedFileType.includes(files[i].type)) {
        file.name = files[i].name;
        file.size = size;
        file.type = files[i].type;
          const reader=new FileReader();
        //read as url to get base64 type data
        reader.readAsDataURL(files[i]);
        reader.onload=(event)=>{
        file.content=event.target?.result as string;
        this.fileUpload.next(file);
      }
      }
      else {
        alert("File Size is greater than 2MB");
      }
    }
  }
}
