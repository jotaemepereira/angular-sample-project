import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateInspectionComponent } from './create-inspection/create-inspection.component'
import { InspectionService } from './services/inspection.service'
import { CreateInspectionRouting } from './create-inspection.routing'
import { VehiclesService } from '../vehicles/services/vehicles.service'

@NgModule({
  imports: [
    CommonModule,
    CreateInspectionRouting,
    FormsModule
  ],
  declarations: [CreateInspectionComponent],
  providers: [InspectionService, VehiclesService]
})
export class CreateInspectionModule { }
