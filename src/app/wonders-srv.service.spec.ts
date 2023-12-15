import { TestBed } from '@angular/core/testing';

import { WondersSrvService } from './wonders-srv.service';

describe('WondersSrvService', () => {
  let service: WondersSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WondersSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
