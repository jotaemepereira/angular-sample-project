import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { BatchTransportModel } from '../../shared/model/batchTransportModel';
import { Response } from '../../shared/model/response';

@Injectable()
export class BatchTransportFinishService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Array<BatchTransportModel>> {
    return this.apiService.get('batchTransport');
  }

  finishBatch(batchTransportId: number): Observable<Response> {
    return this.apiService.post('batchtransport/' + batchTransportId + '/finish', {})
  }

}
