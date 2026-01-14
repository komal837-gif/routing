import { Component, Input, OnInit } from '@angular/core';
import { Icomment } from 'src/app/models/comments';

@Component({
  selector: 'app-commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.scss']
})
export class CommentcardComponent implements OnInit {
  @Input() commentObj !:Icomment
  constructor() { }

  ngOnInit(): void {
  }

}
