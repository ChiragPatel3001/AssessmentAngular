import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from './file-upload.service';
import { MyFile } from './file.model';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.scss']
})
export class UploadfilesComponent implements OnInit {
  public filesList$: Observable<MyFile[]>

  constructor(private fileService: FileUploadService) { 
    this.filesList$ = new Observable<MyFile[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.fileService.getFiles();
  }
  addFile(file:MyFile){
    this.filesList$.subscribe({
      next:(list)=>{
        let isFile=list.find((res)=>{
          return res.name===file.name
        })
        
        if (isFile){
          console.log(isFile)
          alert("Duplicate File");
        }
        else{
          this.UploadFile(file);
        }
      }
    })
  }
  
  UploadFile(file: MyFile) {
    this.fileService.addFiles(file).subscribe({
      next: () => {
        alert("File Added Successfully");
        this.filesList$ = this.fileService.getFiles();
      },
      error: (e) => { console.log(e) }
    })
  }

  ondelete(id: number){
    this.fileService.deleteFiles(id).subscribe(()=>{
      {alert("The data has been deleted")
      this.filesList$ = this.fileService.getFiles();
    }
    })
  }
}
