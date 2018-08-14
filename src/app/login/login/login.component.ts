import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { UserToken } from '../../shared/model/userToken';
import { User } from '../../shared/model/user';
import { LoginService } from '../services/login.service'
import { ApiService } from '../../shared/api/api.service'
import { UsersService } from '../../users/services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private apiService: ApiService,
    private userService: UsersService,
    private router: Router,
    public modal: Modal
  ) { }

  ngOnInit() {
    if (this.loginService.isUserLoggedIn()) {
      this.apiService.refreshToken();
      this.router.navigateByUrl('vehicles');
    }
  }

  submitCredentials() {
    this.loginService.loginUser(this.username, this.password).subscribe(
      (userToken: UserToken) => {
        localStorage.setItem('token', userToken.token);
        this.apiService.refreshToken();

        this.userService.getUserByUsername(this.username).subscribe(
          (loggedUser: User) => {
            localStorage.setItem('role', loggedUser.RoleDB);
            localStorage.setItem('username', this.username);

            if (loggedUser.RoleDB == 'Carrier') {
              this.router.navigateByUrl('batchesTransport');
            } else {
              this.router.navigateByUrl('vehicles');
            }
          },
          error => {
            const dialogRef = this.modal.alert()
            .size('sm')
            .showClose(true)
            .title('Error')
            .body(error)
            .open();
          }
        )
      },
      error => {
        const dialogRef = this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('Error')
        .body(error)
        .open();
      }
    )
  }

}
