import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportByVinComponent } from './report-by-vin/report-by-vin.component';

const routes: Routes = [
  {
    path: '',
    component: ReportByVinComponent,
    children: [
      {
        path: '',
        component: ReportByVinComponent,
        data: {
          title: 'Report by vehicle VIN'
        },
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportByVinRouting { }
