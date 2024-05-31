import { TestBed } from '@angular/core/testing';

import { ServicioFamiliarService } from './servicio-familiar.service';

describe('ServicioFamiliarService', () => {
  let service: ServicioFamiliarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFamiliarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
