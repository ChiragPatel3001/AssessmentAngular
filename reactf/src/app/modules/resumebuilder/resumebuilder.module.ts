import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumebuilderRoutingModule } from './resumebuilder-routing.module';
import { ResumebuilderComponent } from './resumebuilder.component';
import { ResumeformComponent } from './resumeform/resumeform.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeserviceService } from './Services/resumeservice.service';



@NgModule({
  declarations: [
    ResumebuilderComponent,
    ResumeformComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumebuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    ResumeserviceService
  ]
})
export class ResumebuilderModule { }
