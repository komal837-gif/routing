import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRountingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PostDashboardComponent } from './components/post-dashboard/post-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { PostCardComponent } from './components/post-card/post-card.component'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';
import { CommentDashboardComponent } from './components/comment-dashboard/comment-dashboard.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentcardComponent } from './components/commentcard/commentcard.component';
import { UsersComponent } from './components/users/users.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    HomeDashboardComponent,
    NavbarComponent,
    PostDashboardComponent,
    PostCardComponent,
    CommentDashboardComponent,
    CommentCardComponent,
    CommentcardComponent,
    UsersComponent,
    TodoComponent,
    TodoDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    RouterModule,
    HttpClientModule,
     MatButtonModule,
     MatDividerModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
