import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartList} from "../models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: CartList[];
  total: number;
  constructor(private cartService: CartService) {
    this.cartList = this.cartService.cart;
    this.total = this.cartService.total();
  }

  ngOnInit() {
  }

  deleteToCart(id) {
    this.cartService.deleteToCart(id);
    this.total = this.cartService.total();
  }



}
