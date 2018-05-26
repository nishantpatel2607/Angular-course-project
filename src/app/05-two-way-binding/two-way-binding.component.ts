import { Component, OnInit } from '@angular/core'; 

@Component({ 
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  //in order to use ngModel, we need to import FormsModule
  email="me@example.com";

  constructor() { }  

  ngOnInit() {
  }

}
