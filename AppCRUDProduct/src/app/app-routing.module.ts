import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { StaffsComponent } from './staffs/staffs.component';//bước 1 khi làm việc routes
import { StaffEditComponent } from './staffs/staff-edit/staff-edit.component';
import { StaffDeleteComponent } from './staffs/staff-delete/staff-delete.component';
import { StaffAddComponent } from './staffs/staff-add/staff-add.component';
// bước 2 khi làm việc với routes
const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'product-delete/:id', component: ProductDeleteComponent },
  { path: 'staffs', component: StaffsComponent},
  { path: 'staffs-edit/:id', component: StaffEditComponent},
  { path: 'staffs-delete/:id', component: StaffDeleteComponent},
  { path: 'staffs-add', component: StaffAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
