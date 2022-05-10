import { authors } from './../models/author';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
const baseURL = 'http://openlibrary.org';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryApiService {
  constructor(private http: HttpClient) { }

  //configuration of http api
  async get(route: string, data?: any) {
    const url = baseURL + route;
    let params = new HttpParams();

    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    const result = this.http.get(url, {
      responseType: 'json',
      params: params
    });

    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  //search book
  searchBooks(query: string) {

    return this.get('/search.json', { q: query });
  }

  //search books by author
  searchAuthor(query: string) {

    return this.get('/search.json', { author: query });
  }


  //get the book from the api
  getWork(key: string) {
    return this.get(`${key}.json`);
  }

  //get the single author from the api
  getAuthor(key: string) {
    return this.get(`${key}.json`);
  }
}
