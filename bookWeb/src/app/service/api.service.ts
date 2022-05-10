import { BookComponent } from './../book/book.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public getBook(Book:String,Author: String, Language: String,Subject: String){
    //only book name
    if(Book.length>=3 && Author.length<3&&Language.length<3&&Subject.length<3){
      return this.http.get('http://openlibrary.org/search.json?title='+Book);
    }
    //only author name
    else if (Book.length<3 && Author.length>=3&&Language.length<3&&Subject.length<3){
      return this.http.get('http://openlibrary.org/search.json?author='+Author);
    }
    //book name with language
    else if (Book.length>=3 && Author.length<3&&Language.length>=3&&Subject.length<3){
      return this.http.get('http://openlibrary.org/search.json?title='+Book+'&language'+Language);
    }
    //book name with subject
    else if (Book.length>=3 && Author.length<3&&Language.length<3&&Subject.length>=3){
      return this.http.get('http://openlibrary.org/search.json?title='+Book+'&subject'+Subject);
    }
    //book name with author name
    else if (Book.length>=3 && Author.length>=3&&Language.length<3&&Subject.length<3){
      return this.http.get('http://openlibrary.org/search.json?title='+Book+'&subject'+Subject);
    }
    //book name with subject and language
    else if (Book.length>=3 && Author.length<3&&Language.length>=3&&Subject.length>=3){
      return this.http.get('http://openlibrary.org/search.json?title='+Book+'&subject'+Subject)+'&language'+Language;
    }
    //for all detail search
    else{
      return this.http.get('http://openlibrary.org/search.json?title='+Book+'&author'+Author+'&subject'+Subject)+'&language'+Language;
    }
  }

}
