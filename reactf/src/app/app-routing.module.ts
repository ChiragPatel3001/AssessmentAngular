import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { TemplateoutletComponent } from './modules/ngTemplating/templating/templateoutlet/templateoutlet.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./modules/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule)
  },

  {
    path: 'management',
    loadChildren: () => import('./Assessment/user-management/user-management.module').then(m => m.UserManagementModule)
  },

  { path: 'templateng', component: TemplateoutletComponent },

  {
    path: 'subjectcom',
    loadChildren: () => import('./modules/subject-com/subject-com.module').then(m => m.SubjectComModule)
  },

  {
    path: 'mvp',
    loadChildren: () => import('./modules/mvp-demo/mvp-demo.module').then(m => m.MvpDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
