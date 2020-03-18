import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private router: Router) { }
   d = 500000;
p = [
  {name : 'laptop', id: 'pro1', price: '15000'},
  {name : 'mobile', id: 'pro2', price: '15000'},
  {name : 'tv', id: 'pro3', price: this.d}

];
user = [];

  ngOnInit() {
  }
oncreate(uname) {
   this.user.push({name: uname.value});
   if (this.user.length > 3) {
    this.router.navigate(['second']);
  }
}
rmove(item) {
  this.user.splice(item, 1);

}
}
