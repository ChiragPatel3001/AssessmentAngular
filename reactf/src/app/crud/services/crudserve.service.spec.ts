import { TestBed } from '@angular/core/testing';

import { CrudserveService } from './crudserve.service';

describe('CrudserveService', () => {
  let service: CrudserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
