import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { Zone } from '../../shared/model/zone';
import { Response } from '../../shared/model/response';

@Injectable()
export class ZonesService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Array<Zone>> {
    return this.apiService.get('zone');
  }

  moveVehiclesToZone(zoneId: number, vehiclesId: Array<number>): Observable<Response> {
    return this.apiService.post('zone/' + zoneId + '/vehicles', { VehiclesId: vehiclesId });
  }

}
