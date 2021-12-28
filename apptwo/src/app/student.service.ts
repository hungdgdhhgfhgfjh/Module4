import { Injectable } from '@angular/core';
import {Student} from "./interfaces/student"
@Injectable({
  providedIn: 'root'
})//tạo service Student để làm các CRUD:
export class StudentService {

  constructor() { }
  getAll():Student[]{

   let students:Student[] = [{
      name    : "Lê Quốc Hưng",
      age     : "21",
      class   : "6C8",
      address :"02 Chu mạnh Trinh",
  
    },
    {
      name    : "Lê Quốc Hưng",
      age     : "21",
      class   : "6C8",
      address :"02 Chu mạnh Trinh",
    },
    {
      name    : "Lê Quốc Hưng",
      age     : "21",
      class   : "6C8",
      address :"02 Chu mạnh Trinh",
    }];

    return students;
  }
  create():any{

  }
  update():any{

  }
  delete():any{

  }
}
