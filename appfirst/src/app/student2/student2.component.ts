import { Component, OnInit } from '@angular/core';
//step 0 khi làm form 
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Student } from './../interfaces/student';
@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})
export class Student2Component implements OnInit {
  profileForm!: FormGroup;//bước 2 khi làm form
  students: Student[] = [
    {
      name: "Nguyen Van A",
      age: 18,
      phone: "0912345678",
      birthday: new Date(1988, 3, 15),
      gender: true
    },
    
    {
      name: "Nguyen Van B",
      age: 18,
      phone: "0912345678",
      birthday: new Date(1988, 3, 15),
      gender: false
    }
  ];
  constructor(
    private _formBuilder:FormBuilder//bước 3 khi làm form
    ) { }
  ishowform:boolean = false;
  ngOnInit(): void {
    let oldStudent:any = {
      name : 'Nguyễn Văn A',
      age : 18,
    }

    //step 3
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
      'phone': [
        '', []
      ]
    });
  }
  addNew(){
    this.ishowform = true;
  }
  back(){
    this.ishowform = false;
  }
  deleteItem(index:any){
    this.students.splice(index,1);
  }
  handleSubmit(){

    console.log(this.profileForm.value);
    var student:Student =   {
      name: this.profileForm.value.name,
      age: this.profileForm.value.age,
      phone: this.profileForm.value.phone,
      birthday: this.profileForm.value.birthday,
      gender: this.profileForm.value.gender,
    }
    this.students.push(student);
    this.ishowform = false;

  }
}
