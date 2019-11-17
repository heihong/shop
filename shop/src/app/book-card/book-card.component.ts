import {Component, Input, OnInit} from '@angular/core';
import {BookList} from "../models/book.model";
import {PopinAddToCartComponent} from "../popin-add-to-cart/popin-add-to-cart.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() bookList: BookList[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  addToCart(title) {
    const dialogRef = this.dialog.open(PopinAddToCartComponent, {
      width: '250px',
      data: {title: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
