import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('backColor') selectedColor = "dark gray" ;
  constructor() { }

  ngOnInit() {
  }

  getColor(){return "red";}

}
