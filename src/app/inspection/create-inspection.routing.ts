import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateInspectionComponent } from './create-inspection/create-inspection.component';

const routes: Routes = [
  {
    path: '',
    component: CreateInspectionComponent,
    children: [
      {
        path: '',
        component: CreateInspectionComponent,
        data: {
          title: 'Create inspection'
        },
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateInspectionRouting { }
