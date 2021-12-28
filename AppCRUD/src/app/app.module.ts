import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsDeleteComponent } from './products/products-delete/products-delete.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
