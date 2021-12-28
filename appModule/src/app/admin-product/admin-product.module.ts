import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './componentts/product-add/product-add.component';
import { ProductDeleteComponent } from './componentts/product-delete/product-delete.component';
import { ProductEditComponent } from './componentts/product-edit/product-edit.component';
import { ProductsComponent } from './componentts/products/products.component';

import { AdminProductRoutingModule } from './admin-product-routing.module';

@NgModule({
  declarations: [
    ProductAddComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminProductModule { }
