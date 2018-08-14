import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectionComponent } from './inspection/inspection.component';

const routes: Routes = [
  {
    path: '',
    component: InspectionComponent,
    children: [
      {
        path: '',
        component: InspectionComponent,
        data: {
          title: 'Inspections'
        },
      },
      {
        path: ':id',
        component: InspectionComponent,
        data: {
          title: 'Inspections'
        }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionRouting { }
