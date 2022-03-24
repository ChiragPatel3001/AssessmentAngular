import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpClientlistPresentationComponent } from './mvp-clientlist-presentation.component';

describe('MvpClientlistPresentationComponent', () => {
  let component: MvpClientlistPresentationComponent;
  let fixture: ComponentFixture<MvpClientlistPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpClientlistPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpClientlistPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
