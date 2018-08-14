import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { UsersService } from '../services/users.service';
import { User } from '../../shared/model/user';
import { Response } from '../../shared/model/response';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  roles = ['Administrator', 'PortOperator', 'Carrier', 'AreaOperator', 'Seller'];
  user = new User('Name', 'Last name', 'Username', 'Phone', 'Password', this.roles[0]);
  private isModify = false;

  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router, public modal: Modal) { }

  ngOnInit() {
    var userJSON = localStorage.getItem('user');

    if (userJSON === null) {
      this.isModify = false;
    } else {
      this.isModify = true;
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  onSubmit(selectedRole: string) {
    this.user.RoleDB = selectedRole;

    if (this.isModify) {
      this.modifyUser();
    } else {
      this.createUser();
    }
  }

  modifyUser() {
    this.service.updateUser(this.user).subscribe(
      (response: Response) => {
        this.router.navigate(['users']);
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

  createUser() {
    this.service.createUser(this.user).subscribe(
      (response: Response) => {
        this.router.navigate(['users']);
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
