import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BookListService} from "../services/book-list.service";
import {BookList} from "../models/book.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient , private bookListService: BookListService, private router: Router) { }

  bookList: BookList[];
  ngOnInit() {
    this.bookListService.getBookList()
      .subscribe((data) =>
        this.bookList = data
      );
  }

  navigateTo(id) {
    this.router.navigate(['/home', id ]);
  }

}
