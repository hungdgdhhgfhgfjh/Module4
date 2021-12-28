import { Component, OnInit,Input,Output } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';//bước 3 tiền để làm form
import { Student } from '../interfaces/student';
import {StudentService} from ".././student.service"// khi làm việc với service
/*
tạo service :ng g s tên service
import NameService
tiêm vào contructor :  constructor(
    private _StudentService:StudentService
  ) { }
tiêm vào  ngOnInit(): void {
  this.students = this._StudentService.getAll()

  }
*/
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  profileForm!: FormGroup;// bước 4 khi làm form
  pink:any = "màu hồng";
  user ="Hoàng lan";
  isShowform:boolean =false;
  constructor(
    private _formBuilder:FormBuilder,//bước 5 khi làm form
    private _StudentService:StudentService//bước 2 khi làm việc với Service
  ) { }
  delete(index:any){
    this.students.splice(index,1);
  }
  students:Student[]=[];
  ngOnInit(): void {
    
  this.students = this._StudentService.getAll()
  //bước 6 khi làm form sau đó qua bên compoment html làm tiếp
  let oldStudent:any = {
    name : 'Nguyễn Văn A',
    age : 18,
  }
  
 
  this.profileForm = this._formBuilder.group({
    'name': [
      oldStudent.name, [
        Validators.required,
        Validators.minLength(6),
      ]
    ],
    'age': [
      oldStudent.age, [
        Validators.required,
      ]
    ],
    'class': [ oldStudent.class,[
      Validators.required,
    ]],
      'address': [ oldStudent.address,[
        Validators.required,
      ]
    ]
  });
  }
title:string = '1 lời nói thôi'; 
  addNew(){
    this.isShowform = true;
  }
  
  back(){
    this.isShowform = false;
  }//bước thứ 8 làm việc với phương thức đã được khai báo ở form
  handleSubmit(){
    console.log(this.profileForm.value);
    var student:Student =   {
      name: this.profileForm.value.name,
      age: this.profileForm.value.age,
      class: this.profileForm.value.class,
      address: this.profileForm.value.address,
    }
    this.students.push(student);
    this.isShowform = false;
  }
}
