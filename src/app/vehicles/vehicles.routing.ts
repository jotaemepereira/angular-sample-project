import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      {
        path: '',
        component: VehiclesComponent,
        data: {
          title: 'Vehicles'
        },
      },
      {
        path: ':id',
        component: VehiclesComponent,
        data: {
          title: 'Vehicles'
        }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRouting { }
