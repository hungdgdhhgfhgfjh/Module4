import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../shared/service/product.service";
import { Product } from "../../../shared/defines/product";
@Component({
  selector: 'app-products',
  templateUrl: '../.././templates/products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
