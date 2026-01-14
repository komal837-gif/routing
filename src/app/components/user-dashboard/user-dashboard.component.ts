import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  userArr:Iuser[] = [];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    this.userService.fetchUsers().subscribe({
      next:data=>{
        console.log(data)
        this.userArr=data;
      },
      error:err=>{
        console.log(err)
      }
    })
  }
  trackById(index:number,user:Iuser){
        return user.id
    }

}
