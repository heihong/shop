import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookList} from "../models/book.model";
import {PopinAddToCartComponent} from "../popin-add-to-cart/popin-add-to-cart.component";
import {MatDialog} from "@angular/material/dialog";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html'
})
export class BookCardComponent implements OnInit {
  @Input() book: BookList;
  constructor(public dialog: MatDialog , private cartService: CartService) { }

  ngOnInit() {

  }
  addToCart(book: BookList) {
    const dialogRef = this.dialog.open(PopinAddToCartComponent, {
      width: '250px',
      data: {bookData: book}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.cartService.addToCart(result);
    });
  }


}
