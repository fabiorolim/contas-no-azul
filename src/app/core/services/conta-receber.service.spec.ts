import { TestBed } from '@angular/core/testing';

import { ContaReceberService } from './conta-receber.service';

describe('ContaReceberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaReceberService = TestBed.get(ContaReceberService);
    expect(service).toBeTruthy();
  });
});
