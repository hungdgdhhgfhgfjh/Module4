import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Output('handleDelete') handleDelete = new EventEmitter<any>();
  @Input("input_pink") pink:any;
  
  @Input("input_local") local:any;
  
  @Input("input_user") user:any;
   
  @Input("input_title") title:any;
  
  @Input("input_Student") Student:any;
  @Input("input_i") i:any;
  constructor() { }


  ngOnInit(): void {
  }//tên output phải khác tên hàm
  onleDelete(index:any){
   console.log("StudentComponent:handleDelete");
    this.handleDelete.emit(index);
  }
}
