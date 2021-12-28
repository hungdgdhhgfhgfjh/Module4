import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { BlogDeleteComponent } from './components/blog-delete/blog-delete.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import {BlogRoutingModule} from "./blog-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//bước 1 khi làm việc với form import ở dưới nữa nhé


@NgModule({
  declarations: [
    BlogsComponent,
    BlogEditComponent,
    BlogDeleteComponent,
    BlogAddComponent,
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,//bước 2 khi làm việc với form

  ]
})
export class BlogModule { }
