import { TestBed } from '@angular/core/testing';
import {CartService} from "./cart.service";
import {CartList} from "../models/cart.model";

//service

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
    service = TestBed.get(CartService);
  });

  it('should find index 2', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30,
        quantity : 2
      },
      {
        id: 3,
        title: "Tome 3",
        cover:'tome3.jpg',
        price: 30,
        quantity : 1
      }
    ];

    // Then
    const index = service.findIndex(2);

    // When
    expect(index).toEqual( 1 );
  });

  it('should return 160', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 10,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 20,
        quantity : 2
      },
      {
        id: 3,
        title: "Tome 3",
        cover:'tome3.jpg',
        price: 10,
        quantity : 1
      }
    ];

    // Then
    const total = service.total();

    // When
    expect(total).toEqual( 60);
  });

  it('should return true', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30,
        quantity : 1
      },
      {
        id: 3,
        title: "Tome 3",
        cover:'tome3.jpg',
        price: 30,
        quantity : 1
      }
    ];

    // Then
    const  isBookAllReadyAdded = service.isBookAllReadyAdded(2);

    // When
    expect(isBookAllReadyAdded).toBeTruthy();
  });

  it('should return false', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30,
        quantity : 1
      },
      {
        id: 3,
        title: "Tome 3",
        cover:'tome3.jpg',
        price: 30,
        quantity : 1
      }
    ];

    // Then
    const  isBookAllReadyAdded = service.isBookAllReadyAdded(5);

    // When
    expect(isBookAllReadyAdded).toBeFalsy();
  });


  it('should add to cart', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30,
        quantity : 1
      }
    ];

    let book =   {
      id: 3,
      title: "Tome 3",
      cover:'tome3.jpg',
      price: 30
    }

    // Then
    service.addToCart(book);

    // When
    expect(service.cart.length).toEqual(3);
  });

  it('should delete to cart', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30,
        quantity : 1
      }
    ];
    // Then
    service.deleteToCart(2);

    // When
    expect(service.cart.length).toEqual(1);
  });

  it('should delete to cart with quantity = 2', ()  =>{
    // Given
    service.cart =  [
      {
        id: 1,
        title: "Tome 1",
        cover:'tome1.jpg',
        price: 35,
        quantity : 1
      },
      {
        id: 2,
        title: "Tome 2",
        cover:'tome4.jpg',
        price: 30,
        quantity : 2
      }
    ];
    // Then
    service.deleteToCart(2);

    // When
    expect(service.cart.length).toEqual(2);
  });

});
