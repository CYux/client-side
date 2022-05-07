import { FavoriteService } from './../service/favorite.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  items = this.favoriteService.getItems();

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
  }

}
