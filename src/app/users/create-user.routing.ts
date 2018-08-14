import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component'

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent,
    children: [
      {
        path: '',
        component: CreateUserComponent,
        data: {
          title: 'Create user'
        },
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUserRouting { }
