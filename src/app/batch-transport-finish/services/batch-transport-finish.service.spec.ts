import { TestBed, inject } from '@angular/core/testing';

import { BatchTransportFinishService } from './batch-transport-finish.service';

describe('BatchTransportFinishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchTransportFinishService]
    });
  });

  it('should be created', inject([BatchTransportFinishService], (service: BatchTransportFinishService) => {
    expect(service).toBeTruthy();
  }));
});
