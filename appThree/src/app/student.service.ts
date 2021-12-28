import { Injectable } from '@angular/core';
import {Students } from "./interfaces/students";// khi làm việc service thì import interfaces vào sau đó làm 4 phương thứ 4 crud
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getAll():Students[]{
    let students:Students[]=[
      {
        name:"Nguyễn Hoàng Lan",
        age:21,
        address:"21 Chu Mạnh Trinh",
        gender:"Nữ",
      },
      {
        name:"Nguyễn Thảo Anh",
        age:21,
        address:"32 Chu Mạnh Trinh",
        gender:"Nữ",
      },
      {
        name:"Lê Hoàng Anh",
        age:19,
        address:"21 Chu Mạnh Trinh",
        gender:"Nam",
      },

    ]
    return students;
  }
}
