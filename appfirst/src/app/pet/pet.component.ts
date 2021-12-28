import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  
  pet: any = {
    name: 'puppie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg',
    style:"position:relative;left:0px;",
    
  };
  constructor() { }

  ngOnInit() {
  }
  petName :string = 'puppie';
  petImage :any = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  x:number =0;

  updateName(event:any) {
    console.log(123);
    this.x += this.x + 10;
      this.pet.name = event.target.value;
      this.pet.style = `position:relative;left:${this.x}px;`;
      console.log(this.pet);
      
  }

  updateImage(image:any):void {
      this.petImage = image;
  }
}
