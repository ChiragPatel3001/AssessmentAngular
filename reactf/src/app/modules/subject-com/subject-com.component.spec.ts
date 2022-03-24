import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComComponent } from './subject-com.component';

describe('SubjectComComponent', () => {
  let component: SubjectComComponent;
  let fixture: ComponentFixture<SubjectComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
