import { Component, OnInit,Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OpenLibraryApiService } from './../service/open-library-api.service';
import { Book,books } from './../models/book';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})

export class BookSearchComponent implements OnInit {

  //@Output()
  searchForm = this.formBuilder.group({
    search: '',
    page: '',
    selected: '',
  });

  displayedColumns: string[] = ['title', 'author', 'publication', 'details'];

  ngOnInit() { }

  docs: any[] = [];
  constructor(private openLibraryApiService: OpenLibraryApiService,
    private formBuilder: FormBuilder,

  ) { }


  //defult search by title book names.
  async onSearch() {

    if (this.searchForm.value.selected === 'author') {
      this.searchAuthor();
    }
    else { //defult title
      this.searchTitle();
    }
  }

  async searchTitle() {
      const res =
        await this.openLibraryApiService.searchBooks(this.searchForm.value.search);

      this.docs = res.docs;
      console.log(this.docs);
  }

  async searchAuthor() {
    const res =
      await this.openLibraryApiService.searchAuthor(this.searchForm.value.search);

    this.docs = res.docs;

    console.log(this.docs);
  }

  async searchSubject() {
    const res =
      await this.openLibraryApiService.getSubjest(this.searchForm.value.search);


    this.docs = res.docs;
    console.log(this.docs);

 }

}


