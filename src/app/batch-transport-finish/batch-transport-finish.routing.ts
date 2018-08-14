import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchTransportFinishComponent } from './batch-transport-finish/batch-transport-finish.component';

const routes: Routes = [
  {
    path: '',
    component: BatchTransportFinishComponent,
    children: [
      {
        path: '',
        component: BatchTransportFinishComponent,
        data: {
          title: 'Batches on Transport'
        },
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchTransportFinishRouting { }
