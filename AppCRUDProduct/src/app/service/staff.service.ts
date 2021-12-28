import { Injectable } from '@angular/core';
import {Staff} from "../interfaces/staff";
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }
  staffs:Staff[]=[
    {
      name:"Lê Hoàng Anh",
      age:21,
      position:"nhân viên",
      gender:"nam",
    },
    {
      name:"Lê Hoàng Ngọc",
      age:21,
      position:"nhân viên",
      gender:"nữ",
    },
    {
      name:"Phương Hoàng Ngọc",
      age:22,
      position:"nhân viên",
      gender:"nữ",
    },
    {
      name:"Lê lan Anh",
      age:23,
      position:"nhân viên",
      gender:"nữ",
    },
  ]
  getAll():Staff[]{
    return this.staffs;
  }
  find( id:number ):Staff {
    return this.staffs[id];
  }
  update( id:number, staff:Staff ):void{
    this.staffs[id] = staff;
    
  }



}
