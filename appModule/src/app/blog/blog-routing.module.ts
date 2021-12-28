import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlogsComponent} from "./components/blogs/blogs.component";
import {BlogDeleteComponent} from "./components/blog-delete/blog-delete.component";
import {BlogAddComponent} from "./components/blog-add/blog-add.component";
import {BlogEditComponent} from "./components/blog-edit/blog-edit.component";

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },
  {
    path: 'delete/:id',
    component: BlogDeleteComponent
  },
  {
    path: 'edit/:id',
    component: BlogEditComponent
  },
  {
    path: 'add',
    component: BlogAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }