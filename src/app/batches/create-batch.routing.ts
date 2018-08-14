import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBatchComponent } from './create-batch/create-batch.component';

const routes: Routes = [
  {
    path: '',
    component: CreateBatchComponent,
    children: [
      {
        path: '',
        component: CreateBatchComponent,
        data: {
          title: 'Create batch'
        },
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBatchRouting { }
