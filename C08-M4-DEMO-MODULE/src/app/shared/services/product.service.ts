import { Injectable } from '@angular/core';
import {Product} from "./../defines/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //khai bao data cho product
  products:Product[] = [
    {
      name: 'Iphone',
      price: 20000
    },
    {
      name: 'Samsung',
      price: 20000
    },
    {
      name: 'Oppo',
      price: 20000
    }
  ];

  constructor() { }

  //lay tat ca
  getAll():Product[] {
    return this.products;
  }

  //lay 1 item theo id
  find( id:any ):Product {
    return this.products[id];
  }

  //store
  store( product:Product ):void{
    this.products.push(product);
  }

  //update
  update( id:number, product:Product ):void{
    this.products[id] = product;
  }

  //destroy
  destroy( id:number):void{
    this.products.splice(id,1);
  }

  //search
  search( q:any ):Product[] {
    let results:Product[] = [];
    for( let product of this.products ){
      if(product.name == q){
        results.push(product);
      }
    }
    return results;
  }


}
