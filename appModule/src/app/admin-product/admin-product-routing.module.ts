import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./componentts/products/products.component";
import { ProductAddComponent } from "./componentts/product-add/product-add.component";
import { ProductEditComponent } from "./componentts/product-edit/product-edit.component";
import { ProductDeleteComponent } from "./componentts/product-delete/product-delete.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },{
    path: 'list',
    component: ProductsComponent
  }, {
    path: 'product-add',
    component: ProductAddComponent
  }, {
    path: 'product-edit/:id',
    component: ProductEditComponent
  }, {
    path: 'product-delete/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductRoutingModule { }