import { Book } from './../models/book';
import { Component, OnInit, Input } from '@angular/core';
import { books} from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})


export class BookListComponent implements OnInit {

  @Input() docs!:any[];

  displayedColumns: string[] = ['title', 'author', 'publication', 'details'];
  ngOnInit(): void {
  }
}
