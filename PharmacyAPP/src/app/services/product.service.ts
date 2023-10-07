import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private baseUrl: string = 'https://localhost:7148/api/ProductDetails/';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.baseUrl);
  }
public updateProduct(product: Product):Observable<Product[]> {
 return this.http.put<any>(this.baseUrl,product);
}
public deleteProduct(product: Product):Observable<Product[]> {
  return this.http.delete<any>(`${this.baseUrl}${product.productId}`);
}
public  createProduct(product: Product): Observable<Product[]>{
  return this.http.post<any>(this.baseUrl,product);
}
}
