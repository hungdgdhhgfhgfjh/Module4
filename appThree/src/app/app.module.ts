import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//bước 1 khi làm việc với form import ở dưới nữa nhé
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes,ParamMap } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentsComponent } from './students/create-students/create-students.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

/*
bước 1: import { RouterModule, Routes } from '@angular/router';
bước 2: khai báo const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'detail', component: StudentDetailComponent},
  { path: 'create', component: StudentCreateComponent},
  { path: 'delete', component: StudentDeleteComponent},
  { path: 'update', component: StudenUpdateComponent },
  path ""không được bắt đầu bởi dấu / ví dụ "/detail" như thế là sai như này "detail" là đúng ok hi
]
bước 3:  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
*/
 const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'product', component: ProductComponent },
  { path: 'create', component: CreateStudentsComponent},
  
 
]
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    CreateStudentsComponent,
    ProductComponent,
    ProductsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//bước 2 khi làm việc với form
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
