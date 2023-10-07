import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  users:User[]=[];
  heretoEdit?:User;
  constructor(private userService:UserDetailsService,private auth:AuthService){}
  ngOnInit():void{
    console.log("Inside UserDisplayComponent initialization");
    
    this.userService.getUsers().subscribe((result:User[])=>{
      this.users = result;
      console.log(this.users.length);
      
      result.forEach(user => {
        console.log(user.userName);
        
      });
    });
    
  }
  updateUserList(users:User[]){
    this.users = users;
  }
  
    initNewUser(){
      this.heretoEdit=new User();
    }
    editUser(user:User){
      this.heretoEdit=user;
    }
  
  logout(){
    this.auth.signOut();
  }
}
