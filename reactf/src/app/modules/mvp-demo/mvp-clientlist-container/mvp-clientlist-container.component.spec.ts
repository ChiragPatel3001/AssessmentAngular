import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpClientlistContainerComponent } from './mvp-clientlist-container.component';

describe('MvpClientlistContainerComponent', () => {
  let component: MvpClientlistContainerComponent;
  let fixture: ComponentFixture<MvpClientlistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpClientlistContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpClientlistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
