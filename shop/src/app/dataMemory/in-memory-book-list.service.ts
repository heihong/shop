import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import {BookList} from "../models/book.model";

@Injectable({
  providedIn: 'root',
})
export class InMemoryBookListService implements InMemoryDbService {

  createDb() {
    const bookList: BookList[] = [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30
      },
      {
        id: 3,
        title: "Tome 3",
        cover:'tome3.jpg',
        price: 30
      },
      {
        id: 4,
        title: "Tome 4",
        cover:'tome4.jpg',
        price: 29
      },
      {
        id: 5,
        title: "Tome 5",
        cover:'tome5.jpg',
        price: 28
      }
    ];
    return {bookList};
  }
}
