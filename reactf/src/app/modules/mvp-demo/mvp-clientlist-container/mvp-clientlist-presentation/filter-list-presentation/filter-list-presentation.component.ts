import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { mvpclient } from '../../../mvp-demo-model';
import { FilterListPresenterService } from '../filter-list-presenter/filter-list-presenter.service';

@Component({
  selector: 'app-filter-list-presentation',
  templateUrl: './filter-list-presentation.component.html',
  styleUrls: ['./filter-list-presentation.component.scss'],
  viewProviders:[FilterListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListPresentationComponent implements OnInit {


  @Output() public filter: EventEmitter<mvpclient>

  @Output() public onsubmit: EventEmitter<mvpclient>;
  @Output() public close: EventEmitter<any>;
  constructor(private filterlistservice: FilterListPresenterService) { 
    this.close = new EventEmitter<any>();
    this.filter = new EventEmitter<any>();
  }
  filterForm: FormGroup;
  ngOnInit(): void {
    this.filterForm =this.filterlistservice.filterData()
    this.filterlistservice.filterform$.subscribe((val) => {
      this.filter.emit(val);
    })
  }

  public onClose() {
    this.close.emit();
  }
  public onSubmit(){
    
    this.filterlistservice.onsubmit(this.filterForm);
  }
}
