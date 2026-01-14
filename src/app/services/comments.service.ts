import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icomment } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
BASE_URL:string = environment.BASE_URL;
COMMENTS_URL:string = `${this.BASE_URL}/comments`
  constructor(
    private _httpClient:HttpClient
  ) { }

  fetchComments():Observable<Icomment[]>{
    return this._httpClient.get<Icomment[]>(this.COMMENTS_URL)
  }
}
