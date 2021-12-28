import { Component, OnInit, } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  ishowform:boolean = false;
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
  constructor() { }

  ngOnInit(): void {
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
  handleSubmit(profileForm:any){

        console.log(profileForm);
        var student:Student =   {
          name: profileForm.name,
          age: profileForm.age,
          phone: profileForm.phone,
          birthday: profileForm.birthday,
          gender: profileForm.gender,
        }
        this.students.push(student);
        this.ishowform = false;

  }
}
