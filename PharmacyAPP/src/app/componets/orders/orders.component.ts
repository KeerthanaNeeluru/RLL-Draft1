import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
order:any=[];


constructor(private auth: AuthService,private or:OrderService){
  this.order=this.or.getOrders();
}
ngOnInit(){
  this.or.getOrders()
  .subscribe((res: any)=>{this.order=res});
}
logout(){
  this.auth.signOut();
}
}
