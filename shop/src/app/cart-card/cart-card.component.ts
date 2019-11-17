import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookList} from "../models/book.model";
import {CartList} from "../models/cart.model";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {
  @Input() cart: CartList;
  @Output() onCartDelected = new EventEmitter<number>();
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  deleteToCart(id) {
    this.onCartDelected.emit(id);
  }
}
