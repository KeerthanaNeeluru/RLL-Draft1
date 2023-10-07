import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { CartComponent } from '../cart/cart.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent {
  //to get the fullname and order cost
public fullName:string="";
total?:number;
//to get order details
Orderarray:any[]=[];
address:string="";
username:string="";
totalCost?:number;
status:string="";


orderid="";
isResultLoaded=false;
currentid=""

  constructor(
    private userStore: UserStoreService,
    private auth: AuthService,
    private cartComp:CartComponent,
    private http:HttpClient
  ){

    this.getAllOrders();
  }


ngOnInit() {
  this.userStore.getFullNameFromStore()
  .subscribe(val => {
    
    const fullNameFromToken = this.auth.getfullNameFromToken();
    this.fullName = val || fullNameFromToken
    console.log(this.fullName);
  });
  
  this.total=this.cartComp.getTotalCost();
 console.log(this.total)
}


getAllOrders(): void {
  this.http.get("https://localhost:7148/api/Orders/GetOrders")
  .subscribe((res:any)=>{
    this.isResultLoaded=true;
    console.log(res);
    this.Orderarray=res
  });
}

register(){
  let orderdata={
    "Address":this.address,
    "UserName":this.fullName,
    "Total":this.total,
    "status":"not delivered"
  };
  this.http.post("https://localhost:7148/api/Orders/AddOrder",orderdata).subscribe((res:any)=>{
    console.log(res);
    alert("Order Placed");
    this.getAllOrders();
    
  })
}

setUpdate(data:any){
  this.address=data.Address;
  this.username=data.fullName;
  this.totalCost=data.Total;
  this.status="not delivered"
  this.currentid=data.OrderId;
}
updateRecord(){
  let orderdata={
    "Address":this.address,
    "UserName":this.fullName,
    "Total":this.total,
    "Status":"not delivered"
  };
  this.http.patch("https://localhost:7148/api/Orders/UpdateOrder"+"/"+this.currentid,orderdata).subscribe((res:any)=>{
    console.log(res);
    alert("order details updated");
    this.getAllOrders();
  });
}
save(){
  if(this.currentid==''){
    this.register();
  }
  else{
    this.updateRecord();
  }
}
setDelete(data:any){
  this.http.delete("https://localhost:7148/api/Orders/DeleteOrder/"+data.id).subscribe((res:any)=>
  {
    console.log(data.id);
    alert("order cancelled");
    this.getAllOrders();
    
  })
}



}
