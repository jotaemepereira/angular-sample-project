import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared/api/api.service';
import { UserCredentials } from '../../shared/model/userCredentials';
import { UserToken } from '../../shared/model/UserToken';

@Injectable()
export class LoginService {

  constructor(private apiService: ApiService) { }

  loginUser(username: string, password: string): Observable<UserToken> {
    return this.apiService.post("authentication", new UserCredentials(username, password));
  }

  isUserLoggedIn(): boolean {
    return !localStorage.getItem('token') === null
  }

}
