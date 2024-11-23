import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { authGuard } from './guard/auth.guard';
export const routes: Routes = [
    {path: '' , redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {
      path:'users',component:UserListComponent,
      canActivate:[authGuard],
      data:{
        role:'admin'
      }
    }
  
];
