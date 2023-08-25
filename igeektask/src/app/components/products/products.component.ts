import { isPlatformWorkerApp } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any;
  constructor(private productService:ProductService,private cartService:CartService) {}
  ngOnInit(): void {
    this.productService.getProduct().subscribe((res)=>{this.productList=res;
    this.productList.forEach((element:any) => {
      Object.assign(element,{quantity:1,total:element.price})
    });
    })
  }
  addToCart(item:any){
    this.cartService.addToCart(item);
  }
}
