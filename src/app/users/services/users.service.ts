import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { User } from '../../shared/model/user';
import { Response } from '../../shared/model/response';

@Injectable()
export class UsersService {

  constructor(private apiService: ApiService) { }

  list(): Observable<Array<User>> {
    return this.apiService.get('user')
  }

  createUser(user: User): Observable<Response> {
    return this.apiService.post('user', { Name: user.Name, LastName: user.LastName, Username: user.Username,
      Phone: user.Phone, Password: user.Password, Role: { Name: user.RoleDB} });
  }

  getUserByUsername(username: String): Observable<User> {
    return this.apiService.get('user', { username: username })
  }

  deleteUser(username: String): Observable<Response> {
    return this.apiService.delete('user', { username: username })
  }

  updateUser(user: User): Observable<Response> {
    console.log(user);
    return this.apiService.put(
      'user',
      { Name: user.Name, LastName: user.LastName, Username: user.Username,
        Phone: user.Phone, Password: user.Password, Role: { Name: user.RoleDB} },
      {username: user.Username }
    );
  }

}
