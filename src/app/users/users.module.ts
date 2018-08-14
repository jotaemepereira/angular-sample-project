import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component'
import { UsersRouting } from './users.routing'
import { UsersService } from './services/users.service'

@NgModule({
  imports: [
    CommonModule,
    UsersRouting
  ],
  declarations: [UsersComponent],
  providers: [UsersService]
})
export class UsersModule { }
