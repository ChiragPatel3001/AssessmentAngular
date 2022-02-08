import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcrudComponent } from './formcrud/formcrud.component';
import { FormlistComponent } from './formlist/formlist.component';

const routes: Routes = [
  {path:'',
  children: [
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component:FormlistComponent},
    {path:'formcrud', component:FormcrudComponent},
    {path:'edit/:id',component:FormcrudComponent}
  ]},
  // {path: '', redirectTo:'crudcompo', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
