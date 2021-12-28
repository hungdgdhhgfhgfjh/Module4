import { Injectable } from '@angular/core';
import {Product} from "../interfaces/product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products:Product[]=[
    {
      name:"Sách",
      price:27000,
    },
    {
      name:"Áo",
      price:24000,
    },
    {
      name:"Quần",
      price:25000,
    },
  ]
  getAll():Product[] {
    return this.products;
  }
  find( id:number ):Product {
    return this.products[id];
  }
  store( product:Product ):void{

  }
  update( id:number, product:Product ):void{

  }
  destroy( id:number):void{

  }

}
