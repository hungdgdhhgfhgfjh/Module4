import { Component, OnInit } from '@angular/core';
import {Products} from "../interfaces/products";
import {ProductsService} from "../products.service";//bước 2 import lớp servcie vào nhớ tạo service trước khi import
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  constructor(
    private _ProductsService:ProductsService// bước 3 đặt một thuộc tính thuộc kiểu Service 

  ) { }
  products:Products[] = this._ProductsService.getALl();
  ngOnInit(): void {
  }

}
