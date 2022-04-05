import { Component, OnInit } from '@angular/core';
import { Department, User } from '../Model/crud.model';
import { CrudserveService } from '../services/crudserve.service';
import { Overlay } from '@angular/cdk/overlay';
import { ViewContainerRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormcrudComponent } from '../formcrud/formcrud.component';
import { ConfigPopupComponent } from 'src/app/shared/config-popup/config-popup.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.scss']
})
export class FormlistComponent implements OnInit {
  fromList: User[]
  department: Department[];
  searchText: string= "";
  constructor(private crudserveService:CrudserveService, private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  displayOverlay(id?: number){
    const overlayref = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
    });

    const component = new ComponentPortal(FormcrudComponent);
    const componentRef = overlayref.attach(component);

    componentRef.instance.id = id;
    componentRef.instance.onsubmit.subscribe(()=>{
      this.getSubmitttedData();
      overlayref.detach();
    });
    componentRef.instance.close.subscribe(()=>{
      overlayref.detach();
    });
  }

  deletePopup(id: number){
    const overlayref = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically()
    });
    const component = new ComponentPortal(ConfigPopupComponent);
    const componentRef = overlayref.attach(component);

    componentRef.instance.id = id;
    componentRef.instance.ondelete.subscribe((name)=>{
        if(name === "delete")
        this.deleteData(id);
        overlayref.detach();
    })
  }

  ngOnInit(): void {
    this.getSubmitttedData();
    this.crudserveService.getdepartment().subscribe((data:Department[]) => {this.department = data});
  }

  getSubmitttedData(){
    this.crudserveService.getData().subscribe((res:any)=>{
    this.fromList= res
    })
  }
  deleteData(id:number){
    
    this.crudserveService.deleteData(id).subscribe((res :number)=>{ 
      this.getSubmitttedData();
    })
  }

  editData(id: number){
     this.displayOverlay(id);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fromList, event.previousIndex, event.currentIndex);
  }
}
