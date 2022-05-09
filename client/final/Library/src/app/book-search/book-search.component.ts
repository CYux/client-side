import { OpenLibraryApiService } from './../service/open-library-api.service';
import { Component, OnInit } from '@angular/core';
import { books} from '../models/book';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {

  // @ts-ignore
  private subscription: Subscription;
  displayedColumns: string[] = ['title', 'author', 'publication', 'details'];

  docs:any[] =[];

  constructor(
    private openLibraryApiService: OpenLibraryApiService,
    private router: Router,
    private route: ActivatedRoute,
) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.searchBooks(params['query']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async searchBooks(query: string) {
    const res =
      await this.openLibraryApiService.searchBooks(query);

    this.docs = res.docs;
    this.docs.forEach(ele => {
      books.push(ele);
    });
    console.log(this.docs);
  }


}


