import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from "../../../shared/services/book.service";
import { Book } from "../../../shared/defines/book";
@Component({
  selector: 'app-book-delete',
  templateUrl: '../.././templates/book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  id: any = 0;

  book!: Book;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookService: BookService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._BookService.find(id).subscribe(book => {
        this.book = book;
      });
      
    });
  }
  handleYes(){
    this._BookService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['/book/index']);
    }, (e: any) => {
      console.log(e);
    });
    //redirect to products
    //this._Router.navigate(['/products']);
  }
  handleNo(){
    //redirect to products
    this._Router.navigate(['/book/index']);
  }

}
