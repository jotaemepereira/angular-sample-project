import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { UsersService } from '../services/users.service'
import { User } from '../../shared/model/user';
import { Response } from '../../shared/model/response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Array<User>;
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router, public modal: Modal) { }

  ngOnInit() {
    this.usersService.list().subscribe(
      (users: Array<User>) => {
        this.users = users;
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
    localStorage.removeItem('user');
    this.router.navigate(['createUser']);
  }

  modifyUser(position: number) {
    const user = this.users[position];
    localStorage.setItem('user', JSON.stringify(user))
    this.router.navigate(['createUser']);
  }

  removeUser(position: number) {
    this.usersService.deleteUser(this.users[position].Username).subscribe(
      (response: Response) => {
        this.users.splice(position, 1);
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
