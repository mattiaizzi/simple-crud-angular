import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import { UserModule } from '../user.module';

const baseUrl = 'http://localhost:8000/users';

@Injectable({
  providedIn: UserModule,
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(baseUrl);
  }
}
