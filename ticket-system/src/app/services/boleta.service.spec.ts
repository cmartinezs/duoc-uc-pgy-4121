import { TestBed } from '@angular/core/testing';

import { BoletaService } from './boleta.service';

describe('BoletaService', () => {
  let service: BoletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
