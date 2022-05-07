import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder
) { }

  searchForm = this.formBuilder.group({
    search: '',
    page:'',
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your request has been submitted', this.searchForm.value);
    this.searchForm.reset();

  }

  ngOnInit(): void {
  }

}
