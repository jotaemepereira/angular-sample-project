import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchesComponent } from './batches/batches.component';

const routes: Routes = [
  {
    path: '',
    component: BatchesComponent,
    children: [
      {
        path: '',
        component: BatchesComponent,
        data: {
          title: 'Batches'
        },
      },
      {
        path: ':id',
        component: BatchesComponent,
        data: {
          title: 'Batches'
        }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchesRouting { }
