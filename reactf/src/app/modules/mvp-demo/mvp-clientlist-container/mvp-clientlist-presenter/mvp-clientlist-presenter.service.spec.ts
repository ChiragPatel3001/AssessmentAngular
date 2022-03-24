import { TestBed } from '@angular/core/testing';

import { MvpClientlistPresenterService } from './mvp-clientlist-presenter.service';

describe('MvpClientlistPresenterService', () => {
  let service: MvpClientlistPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpClientlistPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
