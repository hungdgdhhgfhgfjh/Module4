import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from "./components/products.component";
import { ProductAddComponent } from "./components/product-add.component";
import { ProductEditComponent } from "./components/product-edit.component";
import { ProductDeleteComponent } from "./components/product-delete.component";

import { AdminProductRoutingModule } from './admin-product-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminProductRoutingModule
  ]
})
export class AdminProductModule { }
