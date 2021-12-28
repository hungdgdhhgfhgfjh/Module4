import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./components/products/products.component";
import { ProductShowComponent } from "./components/product-show/product-show.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },{
    path: 'list',
    component: ProductsComponent
  }, {
    path: 'show/:id',
    component: ProductShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }