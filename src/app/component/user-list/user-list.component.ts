import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { User } from '../../type/user';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  constructor(private authService:AuthServiceService){}

  users:User[]=[];
 
  ngOnInit():void{
   this.authService.getAllUsers().subscribe((users:User[])=>{
     this.users = users;
   },(error)=>{
     console.error('Error fetching user list:', error)
   })
  }
}
