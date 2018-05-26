import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'style-binding', 
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  isValid: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.isValid = !this.isValid;
  }

  getColor() {
    if (this.isValid) {
      return 'lightgreen';
    } else { return 'lightpink';}

  }
}
