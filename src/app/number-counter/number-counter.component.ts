import { Component } from '@angular/core'; 

@Component({
  selector: 'number-counter',
  template: '<b>{{message}}</b>',
  styleUrls: ['./number-counter.component.css']   
})
export class NumberCounterComponent {

  message:string ='';
	count:number = 0;
	increaseByOne() {
	   this.count = this.count + 1;
	   this.message = "Counter: " + this.count; 
	}
	decreaseByOne() {
	   this.count = this.count - 1;
	   this.message = "Counter: " + this.count;
	}

}
