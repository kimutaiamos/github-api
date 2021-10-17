import { TestBed } from '@angular/core/testing';

import { ReposServiceService } from './repos-service.service';

describe('ReposServiceService', () => {
  let service: ReposServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
