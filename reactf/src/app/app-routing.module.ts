import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',redirectTo:'crud',pathMatch:'full'
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule)
  },
  { path: 'resume',
    loadChildren: () => import('./modules/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule) },
    
  { path: 'management',
    loadChildren: () => import('./Assessment/user-management/user-management.module').then(m => m.UserManagementModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
