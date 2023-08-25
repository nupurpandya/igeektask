import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public product:any=[];
  public total:number=0
  constructor(private cartService:CartService) {}
  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any)=>{
      this.product=res;
      this.total=this.cartService.getTotalPrice()
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  removeAllItemsFromCart(){
    this.cartService.removeAllProductsFromCart();
  }
}
