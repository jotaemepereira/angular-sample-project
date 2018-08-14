import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportByStateComponent } from './report-by-state/report-by-state.component';

const routes: Routes = [
  {
    path: '',
    component: ReportByStateComponent,
    children: [
      {
        path: '',
        component: ReportByStateComponent,
        data: {
          title: 'Report by vehicle state'
        },
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportByStateRouting { }
