import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // private baseUrl: string = 'https://localhost:7148/api/ProductDetails/';
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<any>("https://localhost:7148/api/Orders/GetOrders");
  }
public updateOrder(o: Order):Observable<Order[]> {
 return this.http.put<any>("https://localhost:7148/api/Orders/UpdateOrder",o);
}
public deleteOrder(o: Order):Observable<Order[]> {
  return this.http.delete<any>("https://localhost:7148/api/Orders/DeleteOrders"+"/"+`${o.orderId}`);
}
public  createOrder(o: Order): Observable<Order[]>{
  return this.http.post<any>("https://localhost:7148/api/Orders/AddOrders",o);
}
}
