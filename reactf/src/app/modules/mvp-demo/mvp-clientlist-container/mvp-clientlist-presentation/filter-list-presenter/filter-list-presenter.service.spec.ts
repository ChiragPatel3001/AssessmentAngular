import { TestBed } from '@angular/core/testing';

import { FilterListPresenterService } from './filter-list-presenter.service';

describe('FilterListPresenterService', () => {
  let service: FilterListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
