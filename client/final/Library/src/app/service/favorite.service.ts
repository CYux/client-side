import { Injectable } from '@angular/core';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
//service for the favorite book cart
export class FavoriteService {

  items: Book[] = [];
  constructor() { }

  //add book into the cart
  addToFavorite(book: Book) {
    this.items.push(book);
  }

  //get
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
