import { OpenLibraryApiService } from './../service/open-library-api.service';
import { Book,books } from './../models/book';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './../service/favorite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book | undefined;
  bookKeyFromRoute: String | undefined;
  collapsed: boolean = false;
  cover_url = 'https://covers.openlibrary.org/b/id/';
  constructor(private route: ActivatedRoute
    , private favoriteService: FavoriteService,
      ) { }

  ngOnInit(): void {
    // First get the book key from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.bookKeyFromRoute = String(routeParams.get('bookKey'));

    // Find the book that correspond with the id provided in route.
    this.book = books.find(
      (book) => book.key === this.bookKeyFromRoute
    );
  }


  addToFavorite(book: Book) {
    this.favoriteService.addToFavorite(book);
    window.alert('Your book has been added to the Favorite!');
  }

}
