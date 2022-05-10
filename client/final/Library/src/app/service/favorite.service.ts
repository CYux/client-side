import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
//service for the favorite book cart
export class FavoriteService {

  items: any[] = [];
  constructor() { }

  //add book into the cart
  addToFavorite(book:any) {
    this.items.push(book);
  }

  //get book
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
