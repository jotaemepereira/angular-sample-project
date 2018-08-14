import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { Batch } from '../../shared/model/batch';
import { BatchTransport } from '../../shared/model/batchTransport';
import { Response } from '../../shared/model/response';

@Injectable()
export class BatchesTransportService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Array<Batch>> {
    return this.apiService.get('batchtransport/batches')
  }

  startBatchesTranspot(batchTransport: BatchTransport): Observable<Response> {
    return this.apiService.post('batchtransport/start', batchTransport);
  }

}
