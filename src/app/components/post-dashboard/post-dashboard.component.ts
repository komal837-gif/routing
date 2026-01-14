import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  postArr:Ipost[]=[]
  constructor(
    private _postService:PostService
  ) { }

  ngOnInit(): void {

    this._postService.fetchPosts()
      .subscribe({
        next:data=>{
          console.log(data)
          this.postArr=data;
        },
        error:err=>{
          console.log(err)
        }
      })
  }

  trackById(index:number,post:Ipost){
        return post.id
    }

}
