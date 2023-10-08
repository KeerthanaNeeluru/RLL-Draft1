import { Component } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  users:User[]=[];
  fullName: string="";
  constructor (
    private userStore: UserStoreService,
    private auth:AuthService,
    private userService:UserDetailsService,
    private router:Router){}
  ngOnInit() {
    this.userService.getUsers().subscribe((result:User[])=>{
      this.users = result;
      console.log(this.users.length);
      
      result.forEach(user => {
        console.log(user.userName);
        
      });
    });


    this.userStore.getFullNameFromStore()
    .subscribe(val => {
      
      const fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken
      console.log(this.fullName);
    });
  }  
  logout() {
    this.auth.signOut();

    const navigationExtras: NavigationExtras = {
      skipLocationChange: true,
      replaceUrl: true,
    };

    this.router.navigate([''], navigationExtras);

   
  }
}
