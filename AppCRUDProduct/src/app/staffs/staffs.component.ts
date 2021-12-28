import { Component, OnInit } from '@angular/core';
import {StaffService} from "../service/staff.service";// bước 1 khi làm việc với service
import {Staff} from "../interfaces/staff";
@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  staffs:Staff[] = [];// bước 3 khi làm service  tạo 1 thuộc tính để gọi biến 
  constructor(
    private _StaffService:StaffService//bước 2 khi làm việc với service

  ) { }

  ngOnInit(): void {
    this.staffs = this._StaffService.getAll();// bước 4 khi làm việc với service
    console.log(this.staffs);
  }

}
