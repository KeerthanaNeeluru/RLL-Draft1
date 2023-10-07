import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.scss']
})
export class FeedbackAddComponent {

  
  
  FeedbackArray : any[] = [];

  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string ="";
  email: string ="";
  feedback: string ="";
 
  currentUserID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllFeedbackss();
  }

  ngOnInit(): void {
  }

  getAllFeedbackss()
  { 
    this.http.get("https://localhost:7148/api/Feedback/GetFeedback")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.FeedbackArray = resultData;
    });
  }

  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "feedback" : this.feedback,
    
    };

    this.http.post("https://localhost:7148/api/Feedback/AddFeedback",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Feedback Registered")
      
       this.getAllFeedbackss();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
    
  }

  setUpdate(data: any) 
  {
   this.name = data.name;
   this.email = data.email;
   this.feedback = data.feedback;

   this.currentUserID = data.id;
 
  }

  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "email" : this.email,
      "feedback" : this.feedback,
    };
    
    this.http.patch("https://localhost:7148/api/Feedback/UpdateFeedback"+ "/"+ this.currentUserID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Feedback Updated")
        this.getAllFeedbackss();
      
    });
  }
 
  save()
  {
    if(this.currentUserID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }


  setDelete(data: any)
  {
    this.http.delete("https://localhost:7148/api/Feedback/DeleteFeedback"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Feedback Deleted")
        this.getAllFeedbackss();
    });
  }


  //   @Input() feed?:Feedback;
//   @Output() feedChanged=new EventEmitter<Feedback[]>();
  
//   constructor(private feedService:FeedbackService){}
//   ngOnInit(): void {}
// updateFeedback(feed: Feedback){
//   this.feedService
//   .updateFeedback(feed)
//   .subscribe((f:Feedback[]) =>this.feedChanged.emit(f));
// }
// deleteFeedback(feed: Feedback){
//   this.feedService
//   .deleteFeedback(feed)
//   .subscribe((f:Feedback[]) =>this.feedChanged.emit(f));
// }
// createFeedback(feed: Feedback){
//   this.feedService
//   .createFeedback(feed)
//   .subscribe((f:Feedback[]) =>this.feedChanged.emit(f));
// }
}
