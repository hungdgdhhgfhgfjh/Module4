import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';//bước 3 tiền để làm form
import {Blog} from "../../.././shared/defines/blog";//import interfaces vào
import { BlogService } from '../../../shared/service/blog.service';//bước 4 tiền để làm form
import { Router, ActivatedRoute, ParamMap } from '@angular/router';//bước tiếp theo của form

@Component({
  selector: 'app-blog-add',
  templateUrl: '../.././templates/blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  addBlogForm!: FormGroup;
  constructor(
    //bước tiếp theo khi làm form 
    private _ActivatedRoute: ActivatedRoute,
    private _BlogService: BlogService,
    private _Router:Router
  ) { }

  ngOnInit(): void {

  //bước tiếp theo khi làm form
    this.addBlogForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
        des: new FormControl('',[
        Validators.required
      ]),
      feeling: new FormControl('',[
        Validators.required
      ]),
      status: new FormControl('',[
        Validators.required
      ]),
    });
  }
  onSubmit() {
    //bước tiếp theo khi làm form
    //handle submit form
    let formData = this.addBlogForm.value;
    let blog: Blog = {
      name: formData.name,
      des: formData.des,
      feeling:formData.des,
      status:formData.status,
    }
    // call service update vào service của lớp đó tạo method store
    this._BlogService.store(blog);

    //redirect to products
    this._Router.navigate(['/blog']);
  }
}
