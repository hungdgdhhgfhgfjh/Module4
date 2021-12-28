import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './components/staffs/staffs.component';

import { ReactiveFormsModule } from '@angular/forms';
import { StaffAddComponent } from './components/staff-add/staff-add.component';
import { StaffEditComponent } from './components/staff-edit/staff-edit.component';
import { StaffDeleteComponent } from './components/staff-delete/staff-delete.component';
import {BackEndRouting} from "./back-end-routing.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    StaffsComponent,
    StaffAddComponent,
    StaffEditComponent,
    StaffDeleteComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackEndRouting,
    HttpClientModule

   
  ]
})
export class BackEndModule { }
