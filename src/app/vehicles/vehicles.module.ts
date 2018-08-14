import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesRouting } from './vehicles.routing';
import { VehiclesService } from './services/vehicles.service'
import { BatchesService } from './../batches/services/batches.service'
import { ZonesService } from './../zones/services/zones.service'

@NgModule({
  imports: [
    CommonModule,
    VehiclesRouting,
    FormsModule
  ],
  declarations: [VehiclesComponent],
  providers: [VehiclesService, BatchesService, ZonesService]
})
export class VehiclesModule { }
