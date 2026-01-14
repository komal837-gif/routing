import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArr:Itodo[]=[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

    this.todoService.fetchTodos().subscribe({
      next:data=>{
        console.log(data)
        this.todoArr=data;
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  trackById(index:number,todo:Itodo){
        return todo.id
    }

}
