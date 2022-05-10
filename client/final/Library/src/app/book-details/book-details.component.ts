import { OpenLibraryApiService } from './../service/open-library-api.service';
import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './../service/favorite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book!: any;
  author!: any;
  bookKeyFromRoute: String | undefined;
  collapsed: boolean = false;
  cover_url = 'https://covers.openlibrary.org/b/id/';
  constructor(private route: ActivatedRoute
    , private favoriteService: FavoriteService,
    private openLibraryApiService: OpenLibraryApiService,
      ) { }

  ngOnInit(): void {
    // First get the book key from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.bookKeyFromRoute = String(routeParams.get('bookKey'));

    // Find the book that correspond with the id provided in route.
    this.getBook(this.bookKeyFromRoute);

  }

  //add the book item into the cart
  addToFavorite(book: any) {
    this.favoriteService.addToFavorite(book);
    window.alert('Your book has been added to the Favorite!');
  }

  async getBook(key: String) {
      const book =
        await this.openLibraryApiService.getWork(key.toString());

    this.book = book;
    if (book.authors) {
      this.getAuthor(book.authors[0].author.key);
    }
    }

  async getAuthor(key: string) {
    const author =
      await this.openLibraryApiService.getAuthor(key);

    console.log(author);

    this.author = author;
  }
}
