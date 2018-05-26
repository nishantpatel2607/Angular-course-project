import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.css']
})
export class ChildComponent2Component implements OnInit {

  @Output('ParametersChanged') ParametersChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  btnClick(value) {
    this.ParametersChanged.emit({InputText: value});
  }

}
