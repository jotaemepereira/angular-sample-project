import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LoginRouting } from './login.routing'
import { LoginService } from './services/login.service'
import { UsersService } from '../users/services/users.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRouting
  ],
  declarations: [LoginComponent],
  providers: [LoginService, UsersService]
})
export class LoginModule { }
