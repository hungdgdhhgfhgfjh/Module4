import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appfirst';
  x = 0;
  
  image:any ={
    "src":"https://aphoto.vn/wp-content/uploads/2018/02/anh-dep-chup-dien-thoai.jpg",
    "width":200,
    "height":100,
    
  }
  handleValue(event:any):void{
    // this.title = event.target.value;
   
  };
 
  clickhere(){
    this.x++;
    this.image.style.position = "relative";
    this.image.left = this.x+"px";
     
  }

}
