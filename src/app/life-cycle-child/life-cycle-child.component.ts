
import { Component, Input, OnInit, OnChanges, SimpleChanges,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit,OnChanges,DoCheck,OnDestroy {

  @Input() inputPropery:string;
  
  arEvents:string[]=[];

  constructor() {
    this.arEvents.push("Constructor");
   }

  ngOnInit() {
    this.arEvents.push("ngOnInit");
  }


    public ngOnChanges(changes: SimpleChanges): void { 
        for (let propertyName in changes){
          let prop = changes[propertyName];
          let currentVal = JSON.stringify(prop.currentValue);
          let previousVal = JSON.stringify(prop.previousValue);
          
          console.log(propertyName + ': current Value = ' + currentVal + ', Previous Value = ' + previousVal);
        }
        this.arEvents.push("ngOnChanges");
    }

    public ngDoCheck(): void {
      this.arEvents.push("ngDoCheck");
    }

    public ngOnDestroy(): void {
      console.log("ngOnDestroy");
    }
}
