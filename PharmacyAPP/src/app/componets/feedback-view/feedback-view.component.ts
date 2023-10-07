import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.scss']
})
export class FeedbackViewComponent {
  FeedbackArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string ="";
  email: string ="";
  feedback: string ="";
 
  currentUserID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  getAllUsers()
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

    this.http.post("https://localhost:7151/api/User/AddUser",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Feedback Registered")
        this.getAllUsers();
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
    
    this.http.patch("https://localhost:7151/api/User/UpdateUser"+ "/"+ this.currentUserID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Feedback Updated")
        this.getAllUsers();
      
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
    this.http.delete("https://localhost:7151/api/User/DeleteUser"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Feedback Deleted")
        this.getAllUsers();
    });
  }
}
