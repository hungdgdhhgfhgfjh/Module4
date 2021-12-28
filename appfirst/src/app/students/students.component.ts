import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';



@Component({
  selector: '[app-students]',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  
  
  @Input('input_student') student :any;
 
  @Input('input_i') i :any;
 
  @Output('handleDeleteItem') handleDeleteItem = new EventEmitter<any>();


 
 
  constructor() { }

  ngOnInit(): void {
    // console.log(this.students);
    //this.students = [];
  }
 

  handleDelete(index:any){
    console.log('StudentComponent:handleDelete');
    this.handleDeleteItem.emit(index);
  }

}
