import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProductService } from "./../../shared/services/product.service";
import { Product } from "./../../shared/defines/product";

@Component({
  selector: 'app-product-show',
  templateUrl: './../templates/product-show.component.html',
})
export class ProductShowComponent implements OnInit {
  //property id store id in memory
  //property id store id in memory
  id: number = 0;
  product!: Product;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.product = this._ProductService.find(id);
    });
  }

}
