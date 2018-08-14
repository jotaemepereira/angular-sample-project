import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { Batch } from '../../shared/model/batch';
import { Response } from '../../shared/model/response';

@Injectable()
export class BatchesService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Array<Batch>> {
    return this.apiService.get('batch');
  }

  createBatch(name: string, description: string): Observable<Response> {
    return this.apiService.post('batch', { Name: name, Description: description });
  }

  addVehiclesToBatch(batchId: number, vehiclesId: Array<number>): Observable<Response> {
    return this.apiService.post('batch/' + batchId + '/vehicles', { VehiclesId: vehiclesId });
  }

}
