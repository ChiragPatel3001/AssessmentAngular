import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPopupComponent } from './config-popup/config-popup.component';



@NgModule({
  declarations: [
    ConfigPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfigPopupComponent
  ]
})
export class SharedModule { }
