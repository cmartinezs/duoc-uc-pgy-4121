import { TestBed } from '@angular/core/testing';

import { RamApiService } from './ram-api.service';

describe('RamApiService', () => {
  let service: RamApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
