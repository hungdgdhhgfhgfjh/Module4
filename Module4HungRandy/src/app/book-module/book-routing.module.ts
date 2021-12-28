import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from "./components/books/books.component";
import {BookEditComponent} from "./components/book-edit/book-edit.component"
import {BookDeleteComponent} from "./components/book-delete/book-delete.component"
import {BookAddComponent} from "./components/book-add/book-add.component"
import { BookShowComponent } from './components/book-show/book-show.component';
const routes: Routes = [
  {
    path: 'index',
    component: BooksComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'add',
    component: BookAddComponent
  },
  {
    path: "show/:id",
    component: BookShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRouting { }