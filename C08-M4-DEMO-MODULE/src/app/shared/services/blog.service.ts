import { Injectable } from '@angular/core';
import { Blog } from "./../defines/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //khai bao data cho product
  blogs:Blog[] = [
    {
      name: 'Tieu de bai viet 1',
      des: 'Day la bai viet 1'
    },
    {
      name: 'Tieu de bai viet 2',
      des: 'Day la bai viet 2'
    },
    {
      name: 'Tieu de bai viet 3',
      des: 'Day la bai viet 3'
    }
  ];

  constructor() { }

  getAll():any {

  }
}
