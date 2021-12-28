import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
// bước 3 import EventEmitter  khi muốn truyền input vào output ta phải đóng []selector và import input output

@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  
@Input("input_i") i:any;
@Input("input_students") students:any;

@Input("input_student") student:any;
@Input("input_plank") plank:any;
@Output('handleDelete') handleDelete = new EventEmitter<any>();// bước 4 tiếp theo khi output

delete(index:any):void{// bước 5 khai 1 tên hàm khác với hàm trên output vào sử dụng câu lệnh this.hàm output.emit(index);
  console.log("handleDelete.value");
  this.handleDelete.emit(index);
  

}

  ngOnInit(): void {
    // console.log(this.students);
    
  }

}
