import { TestBed } from '@angular/core/testing';

import { LinodeService } from './linode.service';

describe('LinodeService', () => {
  let service: LinodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
