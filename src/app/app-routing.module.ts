import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeDashboardComponent } from "./components/home-dashboard/home-dashboard.component";
import { UserDashboardComponent } from "./components/user-dashboard/user-dashboard.component";
import { PostDashboardComponent } from "./components/post-dashboard/post-dashboard.component";
import { CommentDashboardComponent } from "./components/comment-dashboard/comment-dashboard.component";
import { TodoDashboardComponent } from "./components/todo-dashboard/todo-dashboard.component";


const routes:Routes=[
    {
        path:'',
        component:HomeDashboardComponent
    },
    {
        path:'home',
        component:HomeDashboardComponent
    },
    {
        path:'users',
        component:UserDashboardComponent
    },
    {
        path:'posts',
        component:PostDashboardComponent
    },

    {
        path:'comments',
        component:CommentDashboardComponent
    },
    {
        path:'todos',
        component:TodoDashboardComponent
    }

]


@NgModule({
    imports:[RouterModule.forRoot(routes)]
})
export class AppRountingModule{

}