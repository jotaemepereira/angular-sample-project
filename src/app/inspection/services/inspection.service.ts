import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { VehiclesService } from '../../vehicles/services/vehicles.service'
import { Vehicle } from '../../shared/model/vehicle';
import { Response } from '../../shared/model/response';
import { DamageImage } from '../../shared/model/damageImage';
import { Damage } from '../../shared/model/damage';

@Injectable()
export class InspectionService {

  constructor(private vehicleService: VehiclesService, private apiService: ApiService) { }

  getInspections(vehicleId: string): Observable<Vehicle> {
    return this.vehicleService.getDetail(vehicleId);
  }

  createInspection(vehicleId: string, array: Array<any>): Observable<Response> {
    var damageImage: Array<DamageImage> = [];
    var damages: Array<Damage> = [];

    for (var i=0; i < array.length; i++) {
      damageImage.push(new DamageImage(array[i].code))
    }

    for (var i=0; i < array.length; i++) {
      damages.push(new Damage([damageImage[i]], array[i].name));
    }

    return this.vehicleService.createInspection(
      vehicleId,
      damages
    );


  }

}
