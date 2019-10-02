import { TestBed } from '@angular/core/testing';

import { ContaPagarService } from './conta-pagar.service';

describe('ContaPagarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaPagarService = TestBed.get(ContaPagarService);
    expect(service).toBeTruthy();
  });
});
