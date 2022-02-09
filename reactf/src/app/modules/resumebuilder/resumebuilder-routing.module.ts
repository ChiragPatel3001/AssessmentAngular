import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeViewComponent } from './resume-view/resume-view.component';
// import { ResumebuilderComponent } from './resumebuilder.component';
import { ResumeformComponent } from './resumeform/resumeform.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: 'view', component: ResumeViewComponent },
      { path: 'form', component: ResumeformComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumebuilderRoutingModule { }
