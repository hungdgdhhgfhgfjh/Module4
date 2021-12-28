import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProductsService} from "../../service/products.service";

import {Product} from "../../interfaces/product";
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id: number = 0;
  product!: Product;
  constructor( private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService,
    private _Router:Router) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id:any = paramMap.get('id');
      this.product = this._ProductsService.find(id);
    });
  }
  handleYes(){
    this._ProductsService.destroy(this.id);
    //redirect to products
    this._Router.navigate(['/products']);
  }
  handleNo(){
    //redirect to products
    this._Router.navigate(['/products']);
  }

}
