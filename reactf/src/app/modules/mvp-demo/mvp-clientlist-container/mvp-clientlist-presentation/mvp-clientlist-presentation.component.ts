import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mvpclient } from '../../mvp-demo-model';
import { MvpClientlistPresenterService } from '../mvp-clientlist-presenter/mvp-clientlist-presenter.service';
import { FilterListPresentationComponent } from './filter-list-presentation/filter-list-presentation.component';

@Component({
  selector: 'app-mvp-clientlist-presentation',
  templateUrl: './mvp-clientlist-presentation.component.html',
  styleUrls: ['./mvp-clientlist-presentation.component.scss']
})
export class MvpClientlistPresentationComponent implements OnInit {
  filteredData: mvpclient;
  @Input() public set mvpclientlist(value: mvpclient[] | null) {
    if (value) {
      this._mvpList = value;
    }
  }
  public get mvpclientlist(): mvpclient[] | null {
    return this._mvpList;
  }
  @Output() public delete: EventEmitter<number>;
  constructor(private mvpPresenter: MvpClientlistPresenterService, private router: Router, private overlay: Overlay) {
    this.delete = new EventEmitter();
  }
  private _mvpList: mvpclient[];
  ngOnInit(): void {
    this.mvpPresenter.delete$.subscribe
      ((res: number) => this.delete.emit(res))
  }
  onDelete(id: number) {
    this.mvpPresenter.ondelete(id);
  }
  onEdit(id: number){
    this.router.navigateByUrl(`mvp/edit/${id}`)
  }
  filter(){
    this.openOverlay();
  }
  openOverlay(){
    const overlayref = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .right()
    });

    const component = new ComponentPortal(FilterListPresentationComponent);
    const componentRef = overlayref.attach(component);

    componentRef.instance.filter.subscribe((filterRes)=>{
      this.filterData(filterRes)
      overlayref.detach();
    });
    componentRef.instance.close.subscribe(()=>{
      overlayref.detach();
    });
  }

  filterData(fiters:any){
    this._mvpList = this._mvpList.filter((item)=>{
     return item.age == fiters.age
    })
  }
}
