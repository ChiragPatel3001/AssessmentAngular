import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectComRoutingModule } from './subject-com-routing.module';
import { SubjectComComponent } from './subject-com.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubjectComComponent,
    SubjectFormComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    SubjectComRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubjectComModule { }
