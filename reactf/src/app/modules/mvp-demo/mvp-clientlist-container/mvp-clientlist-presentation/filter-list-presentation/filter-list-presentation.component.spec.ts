import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListPresentationComponent } from './filter-list-presentation.component';

describe('FilterListPresentationComponent', () => {
  let component: FilterListPresentationComponent;
  let fixture: ComponentFixture<FilterListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
