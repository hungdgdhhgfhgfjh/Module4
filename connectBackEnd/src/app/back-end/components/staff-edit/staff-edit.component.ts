import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from "../../../shared/services/staff.service";
import { Staff } from "../../../shared/defines/staff";
@Component({
  selector: 'app-staff-edit',
  templateUrl: '../.././templates/staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
  id: any = 0;

  EditStaffForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _StaffService: StaffService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    //get id from url


    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');

      //alert(id);

      //thay doi gia tri thuoc tinh de su dung cho edit
      this.id = id;
      this._StaffService.find(id).subscribe(staff => {
        //fill input to form
        this.EditStaffForm = new FormGroup({
          name: new FormControl(staff.name, [
            Validators.required,
            Validators.minLength(5)
          ]),
          position: new FormControl(staff.position, [
            Validators.required
          ]),
        });
      });



      //build with reactiform form
    });
  }
  onSubmit() {
  
    //handle submit form
    let formData = this.EditStaffForm.value;
    let staff: Staff = {
      name: formData.name,
      position: formData.position
    }
    // call service update
    this._StaffService.update(this.id, staff).subscribe(() => {
      //redirect to products
      this._Router.navigate(['/admin/index']);
    }, e => {
      console.log(e);
    });
  }
}
