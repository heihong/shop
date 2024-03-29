import {CartList} from "../models/cart.model";
import {BookList} from "../models/book.model";

export class CartService {
  cart: CartList[] = [];
  findIndex(id: number): number {
    return this.cart.map((e) => e.id).indexOf(id);
  }

  total(): number {
    return this.cart.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.price * currentValue.quantity);
    }, 0);
  }

  isBookAllReadyAdded(id): Boolean {
    return this.cart.filter(cart => cart.id === id).length === 1 ;
  }

  addToCart(book: BookList) {
    if (!this.isBookAllReadyAdded(book.id)) {
      this.cart.push({
        id: book.id,
        title: book.title,
        cover: book.cover,
        price: book.price,
        quantity: 1
      });
    } else {
      const index  = this.findIndex(book.id);
      this.cart[index].quantity ++;
    }
  }


  deleteToCart(id) {
    const index  = this.findIndex(id);
    if (this.cart[index].quantity !== 1 ){
      this.cart[index].quantity--;
    } else {
      this.cart.splice(index, 1);
    }
  }
}
