import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionComponent } from './inspection/inspection.component';
import { InspectionRouting } from './inspection.routing';
import { InspectionService } from './services/inspection.service'
import { VehiclesService } from '../vehicles/services/vehicles.service'

@NgModule({
  imports: [
    CommonModule,
    InspectionRouting,
  ],
  declarations: [InspectionComponent],
  providers: [InspectionService, VehiclesService]
})
export class InspectionModule { }
