import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from "../../../shared/services/book.service";
import { Book } from "../../../shared/defines/book";
@Component({
  selector: 'app-book-edit',
  templateUrl: '../.././templates/book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: any = 0;
  EditBookForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookService: BookService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');

      //alert(id);

      //thay doi gia tri thuoc tinh de su dung cho edit
      this.id = id;
      this._BookService.find(id).subscribe(book => {
        //fill input to form
        this.EditBookForm = new FormGroup({
          writer_name: new FormControl(book.writer_name, [
            Validators.required,
            Validators.minLength(5)
          ]),
          book_name: new FormControl(book.book_name, [
            Validators.required
          ]),
        });
      });



      //build with reactiform form
    });
  }
  onSubmit() {
  
    //handle submit form
    let formData = this.EditBookForm.value;
    let staff: Book = {
      writer_name: formData.writer_name,
      book_name: formData.book_name
    }
    // call service update
    this._BookService.update(this.id, staff).subscribe(() => {
      //redirect to products
      this._Router.navigate(['/book/index']);
    }, e => {
      console.log(e);
    });
  }

}
