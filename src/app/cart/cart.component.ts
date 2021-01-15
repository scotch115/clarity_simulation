import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  public total:number;
  public quantity1: number = 0;
  public quantity2: number = 0;

  constructor() { 

    this.total = 0;
  }
  


  ngOnInit(): void {
  }

  addProductToCart() {
    this.total = (25 * this.quantity1) + (25 * this.quantity2);
  }

  updateCart1(value) {
    this.quantity1 = value;
    this.addProductToCart();
  }

  updateCart2(value) {
    this.quantity2 = value;
    this.addProductToCart();
  }

  public clear1() {
    this.quantity1 = 0;
    this.addProductToCart();
  }

  public clear2() {
    this.quantity2 = 0;
    this.addProductToCart();
  }
}
