import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagementComponent } from './user-management.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [{path:'',
children: [
  {path:'', redirectTo:'manage', pathMatch:'full'},
  {path:'user-list', component:UserListComponent},
  {path:'user-view', component:UserViewComponent},
  {path:'manage',component: UserManagementComponent},
  {path:'edit/:id',component:UserViewComponent},
]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
