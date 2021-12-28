import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';// các bước làm 
import {Blog} from "../../.././shared/defines/blog";
import { BlogService } from '../../.././shared/service/blog.service';
@Component({
  selector: 'app-blog-delete',
  templateUrl: '../.././templates/blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
 //property id store id in memory
 id: number = 0;
 blog!: Blog;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BlogService: BlogService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
      //get id from url
      this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');
        this.blog = this._BlogService.find(id);
      });
  }
  handleYes(){
    this._ProductService.destroy(this.id);
    //redirect to products
    this._Router.navigate(['/products']);
  }
  handleNo(){
    //redirect to products
    this._Router.navigate(['/products']);
  }
}
