import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';
import { NavigationExtras, Route, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: any = [];
  public role!: string;

  public fullName: string = "";
  constructor(private api: ApiService, private auth: AuthService, private userStore: UserStoreService,private router:Router) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        this.users = res;
      });
    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        
        const fullNameFromToken = this.auth.getfullNameFromToken();
        this.fullName = val || fullNameFromToken
      });

    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken;
      })

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
