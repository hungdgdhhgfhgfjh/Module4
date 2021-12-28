import { Component,Input,Output, OnInit } from '@angular/core';

@Component({
  selector: '[app-products]',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  @Input("input_product") product:any;
  @Input("input_i") i:any;
  ngOnInit(): void {
  }

}
