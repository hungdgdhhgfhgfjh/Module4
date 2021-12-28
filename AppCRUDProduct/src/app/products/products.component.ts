import { Component, OnInit } from '@angular/core';

import {ProductsService} from "../service/products.service";


import {Product} from "../interfaces/product";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(
   private _ProductService:ProductsService,
  

  ) { }
  products:Product[] = []
  ngOnInit(): void {
    this.products = this._ProductService.getAll();
  }
  
    
  

}
