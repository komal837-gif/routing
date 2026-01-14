import { Component, OnInit } from '@angular/core';
import { Icomment } from 'src/app/models/comments';
import { Ipost } from 'src/app/models/post';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-dashboard',
  templateUrl: './comment-dashboard.component.html',
  styleUrls: ['./comment-dashboard.component.scss']
})
export class CommentDashboardComponent implements OnInit {
commentArr:Icomment[] = []
  constructor(private _commentService:CommentsService) { }

  ngOnInit(): void {

    this._commentService.fetchComments().subscribe({
        next:data=>{
          console.log(data)
          this.commentArr=data;
        },
        error:err=>{
          console.log(err)
        }
    })

  }

  trackById(index:number,comment:Icomment){
      return comment.id
  }
  
}
