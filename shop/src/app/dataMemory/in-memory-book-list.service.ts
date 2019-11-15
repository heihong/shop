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
        title : 'Harry Potter',
        cover: 'harryPotter.jpg',
        bookItemList : [
          {
            id: 1,
            title: "Henri Potier à l'école des sorciers",
            price: 35
          },
          {
            id: 2,
            title: "Henri Potier et la Chambre des secrets",
            price: 30
          },
          {
            id: 3,
            title: "Henri Potier et le Prisonnier d'Azkaban",
            price: 30
          },
          {
            id: 4,
            title: "Henri Potier et la Coupe de feu",
            price: 29
          },
          {
            id: 5,
            title: "Henri Potier et l'Ordre du phénix",
            price: 28
          },
          {
            id: 6,
            title: "Henri Potier et le Prince de sang-mêlé",
            price: 30
          },
          {
            id: 7,
            title: "Henri Potier et les Reliques de la Mort",
            price: 35
          }
        ]
      },
      {
        id: 2,
        title : 'Twilight',
        cover: 'twilight.jpg',
        bookItemList : [
          {
            id: 1,
            title: "Fascination",
            price: 35
          },
          {
            id: 2,
            title: "Tentation",
            price: 27
          },
          {
            id: 3,
            title: "Hésitation",
            price: 30
          },
          {
            id: 4,
            title: "Révélation",
            price: 29
          }
        ]
      }
    ];
    return {bookList};
  }
}
