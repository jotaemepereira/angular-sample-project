import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SellCarComponent } from './sell-car/sell-car.component';
import { SellCarRouting } from './sell-car.routing';
import { VehiclesService } from './services/vehicles.service';

@NgModule({
  imports: [
    CommonModule,
    SellCarRouting,
    FormsModule
  ],
  declarations: [SellCarComponent],
  providers: [VehiclesService]
})
export class SellCarModule { }
