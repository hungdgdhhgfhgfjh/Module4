import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../shared/services/book.service";
import {Book} from "../../../shared/defines/book";
@Component({
  selector: 'app-books',
  templateUrl: '../../templates/books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  count:number = 0; 
  books:Book[] = [];
  keyword:string = '';
  constructor(
    private _BookService:BookService,
  ) { }

  ngOnInit(): void {
    this._BookService.getAll().subscribe(books => {
      this.books = books;
      this.count = this.books.length;
     
    });
   
    
    
  }
  search(value:any){
    if(value){
      this._BookService.search(value).subscribe(books => {
        this.books = books;
      });
    }else{
      this._BookService.getAll().subscribe(books => {
        this.books = books;
      });
    }
    
  }
}
