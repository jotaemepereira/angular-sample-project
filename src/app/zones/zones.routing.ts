import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonesComponent } from './zones/zones.component';

const routes: Routes = [
  {
    path: '',
    component: ZonesComponent,
    children: [
      {
        path: '',
        component: ZonesComponent,
        data: {
          title: 'Zones'
        },
      },
      {
        path: ':id',
        component: ZonesComponent,
        data: {
          title: 'Zones'
        }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonesRouting { }
