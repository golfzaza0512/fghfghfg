import { TestBed } from '@angular/core/testing';

import { OmniServiceService } from './omni-service.service';

describe('OmniServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmniServiceService = TestBed.get(OmniServiceService);
    expect(service).toBeTruthy();
  });
});
