import { TestBed } from '@angular/core/testing';

import { GetAnalyseService } from './get-analyse.service';

describe('GetAnalyseService', () => {
  let service: GetAnalyseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAnalyseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
