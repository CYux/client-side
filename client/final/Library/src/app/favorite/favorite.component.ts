import { FavoriteService } from './../service/favorite.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  items = this.favoriteService.getItems();

  //use frombuilder group method to manage data
  checkBook=this.formBuilder.group({
    name: ''
  });

  constructor(private favoriteService: FavoriteService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.favoriteService.clearCart();
    console.warn('Your book list has been submitted', this.checkBook.value);
    this.checkBook.reset();
  }
}
