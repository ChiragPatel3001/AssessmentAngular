import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles.component';

const routes: Routes = [{ path: '', component: UploadfilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadfilesRoutingModule { }
