import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import {BookRouting} from "./book-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BookShowComponent } from './components/book-show/book-show.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookAddComponent,
    BookShowComponent
  ],
  imports: [
    CommonModule,
    BookRouting,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class BookModuleModule { }
