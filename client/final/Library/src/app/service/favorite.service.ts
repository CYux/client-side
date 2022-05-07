import { Injectable } from '@angular/core';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  items: Book[] = [];
  constructor() { }

  addToFavorite(book: Book) {
    this.items.push(book);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
