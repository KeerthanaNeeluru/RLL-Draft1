import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[];

  constructor(private cartService: CartService,private auth: AuthService,private router: Router) {
    this.cartItems = this.cartService.getCartItems();
    console.log(this.cartItems);
  }

  
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
  }


  removeFromCart(item: any) {
    this.cartService.removeFromCart(item); 
  }

  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + (item.productPrice * (item.quantity || 1)), 0);
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
