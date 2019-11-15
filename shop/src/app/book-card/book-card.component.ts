import {Component, Input, OnInit} from '@angular/core';
import {BookList} from "../models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() bookList: BookList[];
  constructor() { }

  ngOnInit() {

  }

}
