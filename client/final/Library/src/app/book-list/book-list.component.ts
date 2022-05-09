import { Book } from './../models/book';
import { OpenLibraryApiService } from './../service/open-library-api.service';
import { Component, OnInit } from '@angular/core';
import { books} from '../models/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})


export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author', 'publication', 'details'];

  docs:any[] =[];
  constructor(private openLibraryApiService: OpenLibraryApiService) { }

  ngOnInit(): void {
  }
  book : Book | undefined;

  async searchBooks() {
    const res =
      await this.openLibraryApiService.searchBooks('harry potter');

    this.docs = res.docs;
    this.docs.forEach(ele => {
      books.push(ele);
    });
    console.log(this.docs);

  }



  onclick() {
    window.alert('The product has been shared!');
    console.log('The product has been shared!');
  }
}
