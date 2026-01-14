import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itodo } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  BASE_URL=environment.BASE_URL
  TODO_URL= `${this.BASE_URL}/todos`
  constructor(private httpclient:HttpClient) { }

  fetchTodos():Observable<Itodo[]>{
    return this.httpclient.get<Itodo[]>(this.TODO_URL)
  }
}
