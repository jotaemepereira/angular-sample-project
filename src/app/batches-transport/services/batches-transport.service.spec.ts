import { TestBed, inject } from '@angular/core/testing';

import { BatchesTransportService } from './batches-transport.service';

describe('BatchesTransportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchesTransportService]
    });
  });

  it('should be created', inject([BatchesTransportService], (service: BatchesTransportService) => {
    expect(service).toBeTruthy();
  }));
});
