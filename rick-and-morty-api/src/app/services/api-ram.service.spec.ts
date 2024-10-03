import { TestBed } from '@angular/core/testing';

import { ApiRamService } from './api-ram.service';

describe('ApiRamService', () => {
  let service: ApiRamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
