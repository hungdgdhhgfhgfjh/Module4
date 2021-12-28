import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ProductsService} from "../../service/products.service";
import {Product} from "../../interfaces/product"
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';//bước 3 tiền để làm form
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm!: FormGroup;
  // bước 4 khi làm form
  id: number = 0;
  constructor(   
    private _ProductService:ProductsService,
    private _ActivatedRoute: ActivatedRoute,
    private _formBuilder:FormBuilder,//bước 5 khi làm form
    private _Router:Router) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      let product = this._ProductService.find(this.id);

      //fill input to form
      this.productForm = new FormGroup({
        name: new FormControl(product.name,[
          Validators.required,
          Validators.minLength(5)
        ]),
        price: new FormControl(product.price,[
          Validators.required
        ]),
      });

      //build with reactiform form
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
    this._ProductService.update(this.id,product);

    //redirect to products
    this._Router.navigate(['/products']);
  }


}
