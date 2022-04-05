import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadfilesRoutingModule } from './uploadfiles-routing.module';
import { UploadfilesComponent } from './uploadfiles.component';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UploadfilesComponent,
    FileListPresentationComponent,
    FileUploadPresentationComponent,
  ],
  imports: [
    CommonModule,
    UploadfilesRoutingModule,
    SharedModule,
  ]
})
export class UploadfilesModule { }
