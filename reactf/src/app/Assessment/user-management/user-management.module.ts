import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserManageService } from './User-Service/user-manage.service';
import { ClientpipePipe } from './Pipes/clientpipe.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { SearchPipe } from './Pipes/search.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    UserManagementComponent,
    UserViewComponent,
    ClientpipePipe,
    UserListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [UserManageService]
})
export class UserManagementModule { }
