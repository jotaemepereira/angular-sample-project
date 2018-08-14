import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: EmptyLayoutComponent,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: '',
        loadChildren: './login/login.module#LoginModule'
      },
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: './vehicles/vehicles.module#VehiclesModule'
      },
      {
        path: 'inspections',
        loadChildren: './inspection/inspection.module#InspectionModule'
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: 'createUser',
        loadChildren: './users/create-user.module#CreateUserModule'
      },
      {
        path: 'batches',
        loadChildren: './batches/batches.module#BatchesModule'
      },
      {
        path: 'zones',
        loadChildren: './zones/zones.module#ZonesModule'
      },
      {
        path: 'batchesTransport',
        loadChildren: './batches-transport/batches-transport.module#BatchesTransportModule'
      },
      {
        path: 'batchTransportFinish',
        loadChildren: './batch-transport-finish/batch-transport-finish.module#BatchTransportFinishModule'
      },
      {
        path: 'createBatch',
        loadChildren: './batches/create-batch.module#CreateBatchModule'
      },
      {
        path: 'createInspection',
        loadChildren: './inspection/create-inspection.module#CreateInspectionModule'
      },
      {
        path: 'sellCar',
        loadChildren: './vehicles/sell-car.module#SellCarModule'
      },
      {
        path: 'reportByState',
        loadChildren: './report-by-state/report-by-state.module#ReportByStateModule'
      },
      {
        path: 'reportByVin',
        loadChildren: './report-by-state/report-by-vin.module#ReportByVinModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
