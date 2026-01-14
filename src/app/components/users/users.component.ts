import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
@Input() userObj!:Iuser
  constructor() { }

  ngOnInit(): void {
  }

}
