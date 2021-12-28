import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from "../../../shared/services/book.service";
import { Book } from "../../../shared/defines/book";
@Component({
  selector: 'app-book-add',
  templateUrl: '../.././templates/book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  AddBookForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookService: BookService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.AddBookForm = new FormGroup({
      writer_name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      book_name: new FormControl('',[
        Validators.required
      ]),
    });
  }
  onSubmit() {
    console.log("1223");
    // handle submit form
    let formData = this.AddBookForm.value;
    let book: Book = {
      writer_name: formData.writer_name,
      book_name: formData.book_name,
    }
    this._BookService.store(book).subscribe(() => {
      //reset form
      this.AddBookForm.reset();

      //redirect to products
      this._Router.navigate(['/book/index']);
    }, e => {
      console.log(e);
    });
  }
}
