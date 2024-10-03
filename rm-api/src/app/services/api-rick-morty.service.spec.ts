import { TestBed } from '@angular/core/testing';

import { ApiRickMortyService } from './api-rick-morty.service';

describe('ApiRickMortyService', () => {
  let service: ApiRickMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRickMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
