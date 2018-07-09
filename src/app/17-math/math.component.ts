//This example demonstrates the use of service.
//A service object is provided through dependency injection 
//Please refer the file math.service.ts

import { Component, OnInit } from '@angular/core'; 
import { MathService } from '../math.service';

@Component({ 
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
  
})
export class MathComponent implements OnInit {
  sum:number;
  sub:number; 
  mul:number;
  divide:number; 
  numA:number;
  numB:number; 
  constructor(private math:MathService) { } 

  ngOnInit() {
  }

  setA(val){
    this.numA = val;
  }

  setB(val){
    this.numB = val;
  }

  calculate(){
    this.sum = this.math.add(this.numA,this.numB);
    this.sub = this.math.subtract(this.numA,this.numB);
    this.mul = this.math.multiply(this.numA,this.numB);
    this.divide = this.math.divide(this.numA,this.numB);
  }

}
