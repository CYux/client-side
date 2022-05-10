import { ActivatedRoute } from '@angular/router';
import { Author, authors } from './../models/author';
import { Component, OnInit } from '@angular/core';
import { OpenLibraryApiService } from './../service/open-library-api.service';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.css']
})
export class AuthorHomeComponent implements OnInit {

  author!:any;
  authorFromRoute: String |undefined;
  cover_url = "https://covers.openlibrary.org/a/id/";
  constructor(private route:ActivatedRoute,
    private openLibraryApiService: OpenLibraryApiService
    ) { }

  ngOnInit(): void {
    //first get the author key from the current route
    const routeRarams=this.route.snapshot.paramMap;
    const authorkey = "/authors/" + String(routeRarams.get('authorKey'));

    //find the author that correspond with the id provide in route
    this.getAuthor(authorkey);
  }


  async getAuthor(key: string) {
    const author =
      await this.openLibraryApiService.getAuthor(key);

    console.log(author);

    this.author = author;
  }

}
