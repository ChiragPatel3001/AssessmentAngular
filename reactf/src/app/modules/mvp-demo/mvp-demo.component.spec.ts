import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpDemoComponent } from './mvp-demo.component';

describe('MvpDemoComponent', () => {
  let component: MvpDemoComponent;
  let fixture: ComponentFixture<MvpDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
