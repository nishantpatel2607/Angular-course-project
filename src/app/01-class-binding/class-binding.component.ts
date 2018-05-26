import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-binding', 
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  isValid: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.isValid = !this.isValid;
  }

}
