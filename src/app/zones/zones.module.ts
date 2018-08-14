import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonesComponent } from './zones/zones.component';
import { ZonesRouting } from './zones.routing';
import { ZonesService } from './services/zones.service'

@NgModule({
  imports: [
    CommonModule,
    ZonesRouting
  ],
  declarations: [ZonesComponent],
  providers: [ZonesService]
})
export class ZonesModule { }
