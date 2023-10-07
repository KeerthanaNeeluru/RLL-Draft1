import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Feedback } from 'src/app/models/feedback';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
constructor(private auth: AuthService){}
logout(){
  this.auth.signOut();
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
