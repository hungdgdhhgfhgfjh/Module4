import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';//bước 1 khi làm việc với form import ở dưới nữa nhé
import { AdminProductModule } from "./admin-product/admin-product.module";
import { SharedModule } from "./shared/shared.module";
import { ProductModule } from "./product/product.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*
các bước  khi tạo một module
bước 1 :ng g m blog
bước 2 tạo module shared:ng g m shared
bước 3 :ở trong shared
tạo 3 foder:
defines:các file interfaces ví dụ blog.ts ng g i shared/defines/blog
pipe:numberformat;
service:file service ng general service shared/service/blog
bước 4 tạo 1 file blog-routing.module.ts
sữa lại cho chuẩn:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlogsComponent} from "./templates/blogs.component";
import {BlogDeleteComponent} from "./templates/blog-delete.component";
import {BlogAddComponent} from "./templates/blog-add.component";
import {BlogEditComponent} from "./templates/blog-edit.component";

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
bước 5 vào blog.module.ts
import cái BlogRoutingModule vào
bước 6 vào file app-routing.module.ts:
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'admin/products',
    loadChildren: () => import('./admin-product/admin-product.module').then(module => module.AdminProductModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)
  }
];
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminProductModule,
    SharedModule,
    ProductModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
