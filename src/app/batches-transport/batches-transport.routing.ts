import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchesTransportComponent } from './batches-transport/batches-transport.component';

const routes: Routes = [
  {
    path: '',
    component: BatchesTransportComponent,
    children: [
      {
        path: '',
        component: BatchesTransportComponent,
        data: {
          title: 'Batches for transport'
        },
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchesTransportRouting { }
