import { authors } from './../models/author';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
const baseURL = 'http://openlibrary.org';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryApiService {
  constructor(private http: HttpClient) { }

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

  searchBooks(query: string) {
    console.log('/search.json', { q: query });
    return this.get('/search.json', { q: query });
  }

  //search books by author
  searchAuthor(query: string) {
    console.log('/search.json', { author: query });
    return this.get('/search.json', { author: query });
  }


  //works/OL45883W.json
  getWork(key: string) {
    return this.get(`${key}.json`);
  }

  getSubjest(key: string) {
    return this.get(`/subjects/${key}.json`);
  }
  getAuthor(key: string) {
    console.log(`${key}.json`);

    return this.get(`${key}.json`);
  }
}
