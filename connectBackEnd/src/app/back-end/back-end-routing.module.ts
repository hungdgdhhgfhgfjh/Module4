import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffsComponent } from "./components/staffs/staffs.component";
import {StaffEditComponent} from "./components/staff-edit/staff-edit.component"
import {StaffDeleteComponent} from "./components/staff-delete/staff-delete.component"
import {StaffAddComponent} from "./components/staff-add/staff-add.component"

const routes: Routes = [
  {
    path: 'index',
    component: StaffsComponent
  },
  {
    path: 'delete/:id',
    component: StaffDeleteComponent
  },
  {
    path: 'edit/:id',
    component: StaffEditComponent
  },
  {
    path: 'add',
    component: StaffAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackEndRouting { }