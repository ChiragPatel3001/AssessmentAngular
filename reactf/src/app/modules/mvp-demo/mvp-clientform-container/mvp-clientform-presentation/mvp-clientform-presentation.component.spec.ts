import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpClientformPresentationComponent } from './mvp-clientform-presentation.component';

describe('MvpClientformPresentationComponent', () => {
  let component: MvpClientformPresentationComponent;
  let fixture: ComponentFixture<MvpClientformPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpClientformPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpClientformPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
