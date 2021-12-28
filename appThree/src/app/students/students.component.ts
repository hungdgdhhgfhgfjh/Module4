import { Component, OnInit } from '@angular/core';
import { Students} from "../interfaces/students";
import {StudentService} from '../student.service'//bước 2 import Service vào 
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  isShowFormCreate:boolean = false;
  students:Students[] = this._StudentService.getAll();// bước 4 của  Service  tạo một biến
  plank:any  ="plank";
  constructor(
    private _StudentService:StudentService// bước 3 đặt một thuộc tính thuộc kiểu Service 
  ) { }

  ngOnInit(): void {
    // this.students = this._StudentService.getAll()// bước 5 
  }
  delete(index:any):void{
    // bước1 khi muốn tạo ouput đầu tiên phải làm hàm ở lớp cha
    // sau đó qua html component (handle)=hàm đó($event) các bước còn lại qua con sử lý
      console.log("132");
     this.students.splice(index, 1);

      
  }

}
