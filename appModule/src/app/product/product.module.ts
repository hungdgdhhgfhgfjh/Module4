import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShowComponent } from './components/product-show/product-show.component';
import { ProductsComponent } from './components/products/products.component';

import {ProductRoutingModule} from "./product-routing.module";

@NgModule({
  declarations: [
    ProductShowComponent,
    ProductsComponent,
    
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
    
  ]
})
export class ProductModule { }
