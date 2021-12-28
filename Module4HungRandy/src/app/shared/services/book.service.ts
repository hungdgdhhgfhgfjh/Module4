import { Injectable } from '@angular/core';
import {Book} from ".././defines/book";

import {environment} from '../../.././environments/environment';
import { Observable } from 'rxjs';
const API_URL = `${environment.apiUrl}`;
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }
  books:Book[] =[]
  getAll():Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books');
  }

  //lay 1 item theo id
  find( id:any ):Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  //store
  store( Book:Book ): Observable<Book>{
    return this.http.post<Book>(API_URL + '/books', Book);
  }

  //update
  update( id:number, Book:Book ): Observable<Book>{
    return this.http.put<Book>(`${API_URL}/books/${id}`, Book);
  }

  //destroy
  destroy(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }

  //search
  search( q:any ):Observable<Book[]> {
    return this.http.get<Book[]>(API_URL + '/books/?search='+q);
  }
}
