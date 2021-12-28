import { Injectable } from '@angular/core';
import {Products} from "./interfaces/products";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getALl():Products[]{
     let products:Products[]=[// tạo một cái mảng thuộc kiểu interfaces 
       {
        name:"sách Đắc Nhân Tâm",
        year:"09/11/1991",
        image:"http://www.upviet.com.vn/uploaded/tailieu/Sach-hay/sach-hay-dac-nhan-tam-dale-camegie.jpg",
        price:200000,
        categories:"sách cuộc sống",
       },
       {
        name:"sách tư duy",
        year:"08/12/1970",
        image:"https://i-giaitri.vnecdn.net/2015/08/11/5-2611-1439290756_m_460x0.jpg",
        price:100000,
        categories:"sách tạo tự duy",
       },
       {
        name:"sách bạn giỏi tôi giỏi",
        year:"09/12/2000",
        image:"https://giadinh.mediacdn.vn/zoom/740_463/fcQlc7Zq2BgSIIYOL0Z2vNIqb6ZYyk/Image/2012/05/avp1_afe65.jpg",
        price:10000,
        categories:"sách tạo chăm chỉ",
       },
       
     ]
     return products;// return về giá trị 
  }
}
