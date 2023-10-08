import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Feedback } from 'src/app/models/feedback';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
constructor(private auth: AuthService,private router:Router){}
logout() {
  this.auth.signOut();

  const navigationExtras: NavigationExtras = {
    skipLocationChange: true,
    replaceUrl: true,
  };

  this.router.navigate([''], navigationExtras);

 
}
feed:Feedback[]=[];
heretoEdit?:Feedback;
updateFeedbackList(feed:Feedback[]){
  this.feed = feed;
}
initNewFeedback(){
  this.heretoEdit=new Feedback();
}
editProduct(feed:Feedback){
  this.heretoEdit=feed;
}
}
