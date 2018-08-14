import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateUserComponent } from './create-user/create-user.component'
import { CreateUserRouting } from './create-user.routing'
import { UsersService } from './services/users.service'

@NgModule({
  imports: [
    CommonModule,
    CreateUserRouting,
    FormsModule
  ],
  declarations: [CreateUserComponent],
  providers: [UsersService]
})
export class CreateUserModule { }
