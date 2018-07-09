import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: IProduct[]; 

  product: IProduct;

  ngOnInit() {
  }

  getAllProducts() { 
  
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    }, (error) => {console.log(error); },
    () => {console.log(this.products); });

    

    //sub.unsubscribe();
  }

  getProduct() {
    this.productsService.getProduct(1)
    .subscribe(product => {this.product = product; },
       (error) => {console.log(error); },
    () => {console.log(this.product); });
    // console.log(this.product);
  }

}
