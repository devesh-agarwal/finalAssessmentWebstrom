import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
  a: void;
uname = 'enter name';
de: boolean;
selected: any;
aaaa: string;

  ngOnInit() {
  }

on() {
  this.de = true;
}

onemethoh(aaaa) {
 this.a = console.log(aaaa.target.value);
 this.selected = aaaa.target.value;
}

}
