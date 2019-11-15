import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookList} from "../models/book.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.css']
})
export class BookItemListComponent implements OnInit, OnDestroy  {
  bookItemList$: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookItemList$ = this.route.params.subscribe(params => {
      console.log(params);
    });

  }

  ngOnDestroy() {
    this.bookItemList$.unsubscribe();
  }

}
