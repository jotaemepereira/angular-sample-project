import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { Vehicle } from '../../shared/model/vehicle';
import { Response } from '../../shared/model/response';
import { Damage } from '../../shared/model/damage';

@Injectable()
export class VehiclesService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Array<Vehicle>> {
      return this.apiService.get('vehicle');
  }

  getDetail(vehicleId: string): Observable<Vehicle> {
    return this.apiService.get('vehicle/' + vehicleId)
  }

  createInspection(vehicleId: string, body: Array<Damage>): Observable<Response> {
    return this.apiService.post('vehicle/' + vehicleId + '/inspect', {Damages: body});
  }

  sellCar(
    vehicleId: string,
    buyerName: string,
    buyerPhone: string,
    price: String
  ): Observable<Response> {
    return this.apiService.post(
      'vehicle/' + vehicleId + '/sell',
      { BuyerName: buyerName, BuyerPhone: buyerPhone, VehiclePrice: price }
    )
  }

}
