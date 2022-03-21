import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatingRoutingModule } from './templating-routing.module';
import { TemplateoutletComponent } from './templateoutlet/templateoutlet.component';


@NgModule({
  declarations: [
    TemplateoutletComponent
  ],
  imports: [
    CommonModule,
    TemplatingRoutingModule
  ],
  exports: [
    TemplateoutletComponent
  ]
})
export class TemplatingModule { }
