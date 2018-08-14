import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportByVinComponent } from './report-by-vin/report-by-vin.component';
import { ReportByStateService } from './services/report-by-state.service';
import { ReportByVinRouting } from './report-by-vin.routing'

@NgModule({
  imports: [
    CommonModule,
    ReportByVinRouting,
    FormsModule
  ],
  declarations: [ReportByVinComponent],
  providers: [ReportByStateService]
})
export class ReportByVinModule { }
