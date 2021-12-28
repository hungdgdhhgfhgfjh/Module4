import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from "../../../shared/services/staff.service";
import { Staff } from "../../../shared/defines/staff";
@Component({
  selector: 'app-staff-add',
  templateUrl: '../.././templates/staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {
  AddStaffForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _StaffService: StaffService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.AddStaffForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      position: new FormControl('',[
        Validators.required
      ]),
    });
  }
  onSubmit() {
    console.log("1223");
    // handle submit form
    let formData = this.AddStaffForm.value;
    let staff: Staff = {
      name: formData.name,
      position: formData.position,
    }
    this._StaffService.store(staff).subscribe(() => {
      //reset form
      this.AddStaffForm.reset();

      //redirect to products
      this._Router.navigate(['/admin/index']);
    }, e => {
      console.log(e);
    });
  }

}
