import { Component, OnInit } from '@angular/core';
import { StaffService } from "../../../shared/services/staff.service";
import { Staff } from "../../../shared/defines/staff";
@Component({
  selector: 'app-staffs',
  templateUrl: '../.././templates/staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {
  staffs:Staff[] = [];
  keyword:string = '';

  constructor(
    private _StaffService:StaffService
  ) { }

  ngOnInit(): void {
    this._StaffService.getAll().subscribe(staffs => {
      this.staffs = staffs;
    });
  }
  search(value:any){
    if(value){
     
      
      this.staffs = this._StaffService.search(value);
      // console.log(this.staffs);
    }else{
      this._StaffService.getAll().subscribe(staffs => {
        this.staffs = staffs;
      });
    }
    
  }

}
