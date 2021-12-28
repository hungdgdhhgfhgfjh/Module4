import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../service/staff.service"//bước 3 khi edit
import { Router, ActivatedRoute, ParamMap } from '@angular/router';//bước 1 khi làm việc edit
import { FormControl, FormGroup, Validators } from '@angular/forms';//bước 2 khi làm việc edit
import {Staff} from "../../interfaces/staff";
@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  // bước 5 khi làm việc với property id store id in memory
  id: number = 0;
  constructor(
    // bước 4 khi làm việc edit
    private _ActivatedRoute: ActivatedRoute,
    private _StaffService: StaffService,
    private _Router:Router,
  ) { }
  StaffForm!: FormGroup;

  ngOnInit(): void {
    //bước 6 khi làm việc eidt
       //get id from url
       this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id:any = paramMap.get('id');
        
        //thay doi gia tri thuoc tinh de su dung cho edit
        this.id = id;
        
        let staff = this._StaffService.find(id);
  
        //fill input to form
        this.StaffForm = new FormGroup({
          name: new FormControl(staff.name,[
            Validators.required,
            Validators.minLength(5)
          ]),
          age: new FormControl(staff.age,[
            Validators.required
          ]),
          gender: new FormControl(staff.gender,[
            Validators.required
          ]),
          position: new FormControl(staff.position,[
            Validators.required
          ]),
        });
  
        //build with reactiform form
      });
  }
  //bước 8 khi làm việc eidt
  onSubmit(){
    console.log(this.StaffForm.controls);
    let formData = this.StaffForm.value;
    let staff: Staff = {
      name: formData.name,
      age: formData.age,
      position: formData.position,
      gender: formData.gender,
    }
    // call service update
    // gọi service phương thức update
    this._StaffService.update(this.id,staff);

    //redirect to products
    // chuyển hương đến trang khác
    this._Router.navigate(['/staffs']);
  }
}
