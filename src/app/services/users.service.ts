import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 BASE_URL:string=environment.BASE_URL;
 USER_URL:string=`${this.BASE_URL}/users`
  constructor(private _httpclient:HttpClient) { }

  fetchUsers():Observable<Iuser[]>{
    return this._httpclient.get<Iuser[]>(this.USER_URL)
  }
}
