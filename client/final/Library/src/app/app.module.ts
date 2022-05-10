import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteComponent } from './favorite/favorite.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BookListComponent,
    BookDetailsComponent,
    FavoriteComponent,
    BookSearchComponent,
    AuthorHomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', component: BookSearchComponent },
      { path: 'book/:bookKey', component: BookDetailsComponent },
      { path: 'favorite', component: FavoriteComponent },
      {path: 'authors/:authorKey',component:AuthorHomeComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
