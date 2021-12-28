import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//bước 1 khi làm việc với form import ở dưới nữa nhé
import { StaffsComponent } from './staffs/staffs.component';
import { StaffEditComponent } from './staffs/staff-edit/staff-edit.component';
import { StaffDeleteComponent } from './staffs/staff-delete/staff-delete.component';
import { StaffAddComponent } from './staffs/staff-add/staff-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductAddComponent,
    StaffsComponent,
    StaffEditComponent,
    StaffDeleteComponent,
    StaffAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
