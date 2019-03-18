import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }


  getLoginService() {
    return this.httpclient.get<User>('http://localhost:8080/login');
  }
}
