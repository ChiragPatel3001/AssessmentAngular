import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpClientformContainerComponent } from './mvp-clientform-container.component';

describe('MvpClientformContainerComponent', () => {
  let component: MvpClientformContainerComponent;
  let fixture: ComponentFixture<MvpClientformContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpClientformContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpClientformContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
