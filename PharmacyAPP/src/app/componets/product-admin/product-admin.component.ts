import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent {
constructor(private auth: AuthService,private productService:ProductService,private router:Router){}

products: Product[]=[];
heretoEdit?:Product;
searchText:any;
ngOnInit():void{
  console.log("Inside UserDisplayComponent initialization");
    
  this.productService.getProducts().subscribe((res:Product[])=>{
    this.products = res;
    console.log(this.products.length);
    
    res.forEach(p => {
      console.log(p.productName);
      
    });

  });


}
updateProductList(prod:Product[]){
  this.products = prod;
}
initNewProduct(){
  this.heretoEdit=new Product();
}
editProduct(product:Product){
  this.heretoEdit=product;
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
