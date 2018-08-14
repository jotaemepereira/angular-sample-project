import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component'

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
        data: {
          title: 'Users'
        },
      },
      {
        path: ':id',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRouting { }
