import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from '../../services/cart.service';

import { ProductService } from '../../services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: any = [];
  public cartItems: any[] = [];
searchText:any;

  constructor(private product: ProductService
    ,private auth:AuthService,
     private cartService: CartService,
     private toast:NgToastService,
     private router:Router) {
    this.products = this.product.getProducts();
  }


  ngOnInit() {
    this.product.getProducts()
      .subscribe(res => {
        this.products = res;
      });
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.productName === item.productName);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1; // Initialize quantity if undefined
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }

    this.cartService.addToCart(item); // Add the item to the cart service
    this.toast.success({ detail: "Product Added", summary: "Product Added To Cart", duration: 1000 });
    console.log('addToCart called');
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


