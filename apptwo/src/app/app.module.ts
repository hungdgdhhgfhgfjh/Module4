import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';//bước 1 khi làm việc với form import ở dưới nữa nhé
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { StudentCreateComponent } from './students/student-create/student-create.component';
import { StudentDeleteComponent } from './students/student-delete/student-delete.component';
import { StudenUpdateComponent } from './students/studen-update/studen-update.component';
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
  { path: 'detail', component: StudentDetailComponent},
  { path: 'create', component: StudentCreateComponent},
  { path: 'delete', component: StudentDeleteComponent},
  { path: 'update/:id', component: StudenUpdateComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentDeleteComponent,
    StudenUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
