import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-prod-edit',
  templateUrl: './prod-edit.component.html',
  styleUrls: ['./prod-edit.component.scss']
})
export class ProdEditComponent {
  @Input() products?:Product;
  @Output() productsChanged = new EventEmitter<Product[]>();
  constructor(private productService:ProductService){}

  updateProduct(prod: Product){
    this.productService
    .updateProduct(prod)
    .subscribe((prods:Product[]) =>this.productsChanged.emit(prods));
  }
  deleteProduct(prod: Product){
    this.productService
    .deleteProduct(prod)
    .subscribe((prods:Product[]) =>this.productsChanged.emit(prods));
  }
  createProduct(prod: Product){
    this.productService
    .createProduct(prod)
    .subscribe((prods:Product[]) =>this.productsChanged.emit(prods));
  }
}
