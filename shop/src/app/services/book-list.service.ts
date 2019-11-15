import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BookList} from "../models/book.model";

@Injectable()
export class BookListService {

  bookListUrl = 'api/bookList';

  constructor(private http: HttpClient) { }

  getBookList() {
    return this.http.get<BookList[]>(this.bookListUrl);
  }

}
