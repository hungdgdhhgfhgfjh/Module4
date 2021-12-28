import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';//cách làm việc form edit
import {Blog} from "../../.././shared/defines/blog";//cách làm việc form edit
import { BlogService } from '../../.././shared/service/blog.service';//cách làm việc form edit
@Component({
  selector: 'app-blog-edit',
  templateUrl: '../.././templates/blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
 //property id store id in memory //cách làm việc form edit
 id: any = 0;
 editBlogForm!: FormGroup;
  constructor(
    //cách làm việc form edit
    private _ActivatedRoute: ActivatedRoute,
    private _BlogService: BlogService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url //cách làm việc form edit
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      
      //thay doi gia tri thuoc tinh de su dung cho edit
      this.id = id;
      // vào service tạo method find
      let blog = this._BlogService.find(id);

      //fill input to form
      this.editBlogForm = new FormGroup({
        name: new FormControl(blog.name,[
          Validators.required,
          Validators.minLength(5)
        ]),
        des: new FormControl(blog.des,[
          Validators.required,
         
        ]),
        feeling: new FormControl(blog.feeling,[//cái trước phải giống cái sau
          Validators.required,
         
        ]),
        status: new FormControl(blog.status,[
          Validators.required,
         
        ]),
      });

      //build with reactiform form
    });
  }
  onSubmit() {
    //handle submit form // bước tiếp theo với edit tiếp đó qua form làm việc 
    let formData = this.editBlogForm.value;
    let blog: Blog = {
      name: formData.name,
      des: formData.des,
      feeling:formData.feeling,
      status:formData.status
    }
    // call service update vào service tạo method update
    this._BlogService.update(this.id,blog);

    //chuyển hướng về trang blog
    this._Router.navigate(['/blog']);
  }

}
