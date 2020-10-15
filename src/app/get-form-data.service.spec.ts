import { TestBed } from '@angular/core/testing';

import { GetFormDataService } from './get-form-data.service';

describe('GetFormDataService', () => {
  let service: GetFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
