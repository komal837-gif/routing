import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL:string=environment.BASE_URL
  POST_URL:string=`${this.BASE_URL}/posts`
  constructor(
    private _httpClient:HttpClient
  ) { }

  fetchPosts():Observable<Ipost[]>{
    return this._httpClient.get<Ipost[]>(this.POST_URL)
  }
}
