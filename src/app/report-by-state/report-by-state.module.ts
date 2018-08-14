import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportByStateComponent } from './report-by-state/report-by-state.component';
import { ReportByStateRouting } from './report-by-state.routing';
import { ReportByStateService }  from './services/report-by-state.service';

@NgModule({
  imports: [
    CommonModule,
    ReportByStateRouting
  ],
  declarations: [ReportByStateComponent],
  providers: [ReportByStateService]
})
export class ReportByStateModule { }
