import { TestBed, inject } from '@angular/core/testing';

import { ReportByStateService } from './report-by-state.service';

describe('ReportByStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportByStateService]
    });
  });

  it('should be created', inject([ReportByStateService], (service: ReportByStateService) => {
    expect(service).toBeTruthy();
  }));
});
