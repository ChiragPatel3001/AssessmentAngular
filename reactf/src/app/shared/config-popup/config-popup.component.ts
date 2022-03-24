import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-config-popup',
  templateUrl: './config-popup.component.html',
  styleUrls: ['./config-popup.component.scss']
})
export class ConfigPopupComponent implements OnInit {
  @Input() id:number;
  @Output() ondelete: EventEmitter<string>;
  constructor() {this.ondelete = new EventEmitter<string>(); }
  
  ngOnInit(): void {
  }
onclickDelete(name: string){
  this.ondelete.emit(name);
}
}
