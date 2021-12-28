import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StaffService } from "../../../shared/services/staff.service";
import { Staff } from "../../../shared/defines/staff";
@Component({
  selector: 'app-staff-delete',
  templateUrl: '../.././templates/staff-delete.component.html',
  styleUrls: ['./staff-delete.component.css']
})
export class StaffDeleteComponent implements OnInit {
  id: any = 0;

  staff!: Staff;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _StaffService: StaffService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._StaffService.find(id).subscribe(staff => {
        this.staff = staff;
      });
      
    });
  }
  handleYes(){
    this._StaffService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['/admin/index']);
    }, (e: any) => {
      console.log(e);
    });
    //redirect to products
    //this._Router.navigate(['/products']);
  }
  handleNo(){
    //redirect to products
    this._Router.navigate(['/admin/index']);
  }
}
