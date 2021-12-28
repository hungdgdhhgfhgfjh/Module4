import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';//bước 3 tiền để làm form
import { Students } from 'src/app/interfaces/students';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {StudentService} from '../../student.service'//bước 2 import Service vào 
@Component({
  selector: '[app-create-students]',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {
  profileForm!: FormGroup;// bước 4 khi làm form
  constructor(
    private _StudentService:StudentService,// bước 3 đặt một thuộc tính thuộc kiểu Service 
    private route: ActivatedRoute,
    private _formBuilder:FormBuilder,//bước 5 khi làm form
  ) { }
  
  @Input("input_students") students:any=this._StudentService.getAll();
@Input("input_isShowFormCreate") isShowFormCreate:any=true;
name:string ="";
  ngOnInit(): void {
     console.log(this.students);
    this.route.queryParams.subscribe(params => {
      this.name = params[''];
    });
    // console.log(this.students);
    
    //  this.students = this._StudentService.getAll()// bước 5 
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
    'address': [ oldStudent.address,[
      Validators.required,
    ]],
      'gender': [ oldStudent.gender,[
        Validators.required,
      ]
    ]
  });
  }
  @Output('handleDelete') handleDelete = new EventEmitter<any>();// bước 4 tiếp theo khi output

  delete(index:any):void{// bước 5 khai 1 tên hàm khác với hàm trên output vào sử dụng câu lệnh this.hàm output.emit(index);
    console.log("handleDelete.value");
    this.students.splice(index, 1);
    this.handleDelete.emit(index);
    
  
  }
  add(){
    this.isShowFormCreate = true;
  }
  handleSubmit(){
    console.log(this.profileForm.value);
    var student:Students =   {
      name: this.profileForm.value.name,
      age: this.profileForm.value.age,
      gender: this.profileForm.value.class,
      address: this.profileForm.value.address,
    }
    this.students.push(student);
    console.log(this.students);
    this.isShowFormCreate =  false;
    
    
    
  }

}
