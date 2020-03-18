import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
 d = 'dasas';
mag: string

  ngOnInit() {
  }
 mymethod() {
  return '123fdsfds' + this.d;
}
addtocart() {
  this.d = 'return';
}
addtocart1(event) {
  this.mag = event.target.value + ' added ';
}
info(inputinfo) {
  console.log(inputinfo.name);
}
}
