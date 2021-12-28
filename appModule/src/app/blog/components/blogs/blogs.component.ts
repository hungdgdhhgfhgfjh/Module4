import { Component, OnInit } from '@angular/core';
import {Blog} from "../../.././shared/defines/blog";//import interfaces vào
import {BlogService} from "../../.././shared/service/blog.service"//import service vào
@Component({
  selector: 'app-blogs',
  templateUrl: '../.././templates/blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs:Blog[] =[];
  constructor(
    private _BlogService:BlogService// bước 3 đặt một thuộc tính thuộc kiểu Service 
  ) { }
  
  ngOnInit(): void {
    this.blogs = this._BlogService.getAll();
  }

}
