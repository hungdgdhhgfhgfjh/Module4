import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../shared/service/product.service";
import { Product } from "../../../shared/defines/product";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: '../.././templates/product-add.component.html',

})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
    });
  }

  onSubmit() {
    //handle submit form
    let formData = this.productForm.value;
    let product: Product = {
      name: formData.name,
      price: formData.price
    }
    // call service update
    this._ProductService.store(product);

    //redirect to products
    this._Router.navigate(['/products']);
  }
}
