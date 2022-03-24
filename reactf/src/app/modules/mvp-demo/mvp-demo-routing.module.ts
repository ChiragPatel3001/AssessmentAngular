import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvpClientformContainerComponent } from './mvp-clientform-container/mvp-clientform-container.component';
import { MvpClientlistContainerComponent } from './mvp-clientlist-container/mvp-clientlist-container.component';
import { MvpDemoComponent } from './mvp-demo.component';

const routes: Routes = [
  {
    path: '',
    component: MvpDemoComponent,
    children: [
      {
        path: 'mvp-list',
        component: MvpClientlistContainerComponent
      },
      {
        path: 'add',
        component: MvpClientformContainerComponent
      },
      {
        path: 'edit/:id',
        component: MvpClientformContainerComponent
      },
      {
        path: '',
        redirectTo: 'mvp-list',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpDemoRoutingModule { }
