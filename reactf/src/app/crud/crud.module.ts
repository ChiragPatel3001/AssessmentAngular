import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudRoutingModule } from './crud-routing.module';
import { FormcrudComponent } from './formcrud/formcrud.component';
import { FormlistComponent } from './formlist/formlist.component';
import { DeptpipePipe } from './pipes/deptpipe.pipe';
import { FormcrudfilterPipe } from './pipes/formcrudfilter.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormcrudComponent,
    FormlistComponent,
    DeptpipePipe,
    FormcrudfilterPipe,
    
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  exports:[
  ]
})
export class CrudModule { }
