import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigPopupComponent } from './config-popup/config-popup.component';
import { FileDragndropDirective } from './directive/file-dragndrop.directive';



@NgModule({
  declarations: [
    ConfigPopupComponent,
    FileDragndropDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfigPopupComponent,
    FileDragndropDirective
  ]
})
export class SharedModule { }
