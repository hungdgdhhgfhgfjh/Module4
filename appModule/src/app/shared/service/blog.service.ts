import { Injectable } from '@angular/core';
import {Blog} from "../defines/blog";
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  blogs:Blog[] = [
    {
      name: 'Tieu de bai viet 1',
      des: 'Day la bai viet 1',
      feeling:"Hạnh Phúc",
      status:"Tốt",

    },
    {
      name: 'Tieu de bai viet 2',
      des: 'Day la bai viet 2',
      feeling:"Hạnh Phúc",
      status:"Tốt",
    },
    {
      name: 'Tieu de bai viet 3',
      des: 'Day la bai viet 3',
      feeling:"Hạnh Phúc",
      status:"Tốt",
    }
  ];
  getAll():any {
    return this.blogs;
  }
  store(blog:any):void{
      this.blogs.push(blog);
  }
   //lay 1 item theo id
   find( id:any ):Blog {
    return this.blogs[id];
  }
  update( id:number, blog:Blog ):void{
    this.blogs[id] = blog;
  }

}
