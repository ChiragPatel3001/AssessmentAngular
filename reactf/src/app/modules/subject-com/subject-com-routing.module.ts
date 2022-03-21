import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComComponent } from './subject-com.component';

const routes: Routes = [{ path: '', component: SubjectComComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectComRoutingModule { }
