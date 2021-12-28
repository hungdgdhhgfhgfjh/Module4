import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-number',
  templateUrl: './game-number.component.html',
  styleUrls: ['./game-number.component.css']
})
export class GameNumberComponent implements OnInit {
  x: any = 1;
  point:any = 0;
  timer:any = 5;
  theinterval:any;
  checkAnser:boolean = false;
  numbers: number[] = [];
  counter(i: number) {
    return new Array(i);
  }
  constructor() { }


  ngOnInit(): void {
    for(let i = 1; i <= 100; i++){
      this.numbers.push(i);
    }
    this.numbers = this.numbers.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  }
  ngDoCheck():void{
    if( this.timer == 0 ){
      alert("hết giờ , bạn được " + this.point + "điểm");
      this.x = 1;
      this.point = 0;
      this.timer = 5;
      clearInterval(this.theinterval);
    }
  }

  check(index: any) {

    if( index == 1 ){
      this.theinterval = setInterval( () => {
        this.timer--;
      }, 1000 )
    }

    

    if( this.x != index ){
      
      alert("sai");
      this.x = 1;
      this.point = 0;
    }else{
      this.timer = this.timer + 5;
    //  alert(this.x++);
      this.x++;
      this.point++;
    }

    this.numbers = this.numbers.map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
     }
  generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
   randomColor:any = this.generateRandomColor();
}
