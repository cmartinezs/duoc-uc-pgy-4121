import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderService } from './json-placeholder.service';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
