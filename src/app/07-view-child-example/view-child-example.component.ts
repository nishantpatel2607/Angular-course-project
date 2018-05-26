import { NumberCounterComponent } from '../number-counter/number-counter.component';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'view-child-example', 
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.css']
})
export class ViewChildExampleComponent  {

  //decorator to reference the component in html
  @ViewChild(NumberCounterComponent)
    public numberComponent: NumberCounterComponent;  

    @ViewChild('name') 
    private elName : ElementRef; 
    
    @ViewChild('city') 
    private elCity : ElementRef;

    increase() {
       this.numberComponent.increaseByOne();
    }
    decrease() {
       this.numberComponent.decreaseByOne();
    }

    setBorderColor(){
      this.elName.nativeElement.style.border='5px solid green';
      this.elCity.nativeElement.style.border='5px solid red';
      alert(this.elName.nativeElement.value);
    }

}
