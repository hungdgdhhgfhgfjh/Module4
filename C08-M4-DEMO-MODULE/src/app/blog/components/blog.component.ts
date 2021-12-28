import { Component, OnInit } from '@angular/core';

import { ProductService } from "./../../shared/services/product.service";
import { Product } from "./../../shared/defines/product";

@Component({
  selector: 'app-products',
  templateUrl: './../templates/products.component.html',
})
export class BlogComponent implements OnInit {
  products:Product[] = [];
  keyword:string = '';
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._ProductService.getAll();
  }

  search(value:any){
    if(value){
      this.products = this._ProductService.search(value);
    }else{
      this.products = this._ProductService.getAll();
    }
    
  }

}
