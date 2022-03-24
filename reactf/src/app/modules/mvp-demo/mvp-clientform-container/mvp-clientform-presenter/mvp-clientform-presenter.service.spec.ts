import { TestBed } from '@angular/core/testing';

import { MvpClientformPresenterService } from './mvp-clientform-presenter.service';

describe('MvpClientformPresenterService', () => {
  let service: MvpClientformPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpClientformPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
