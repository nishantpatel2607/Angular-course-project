import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if-directive', 
  templateUrl: './ng-if-directive.component.html',
  styleUrls: ['./ng-if-directive.component.css']
})
export class NgIfDirectiveComponent implements OnInit { 

  visibleFlag = true; 
  constructor() { } 

  ngOnInit() {
  }

  testngIf() {
    this.visibleFlag = !this.visibleFlag;
  }

}
