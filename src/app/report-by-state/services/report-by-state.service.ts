import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

import { ApiService } from '../../shared/api/api.service';
import { VehicleGroupedByState } from '../../shared/model/VehicleGroupedByState';
import { ReportByVin } from '../../shared/model/reportByVin';

@Injectable()
export class ReportByStateService {

  constructor(private apiService: ApiService) { }

  loadVehiclesByState(): Observable<VehicleGroupedByState> {
    return this.apiService.get('reports/vehiclesGroupedByState');
  }

  searchByVin(vin: string): Observable<Array<ReportByVin>> {
    return this.apiService.get('reports/vehicleHistory', { vin: vin});
  }

}
