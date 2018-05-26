import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-environment-test',
  templateUrl: './environment-test.component.html',
  styleUrls: ['./environment-test.component.css']
})
export class EnvironmentTestComponent implements OnInit {

  backcolor;
  constructor() {
    this.backcolor = environment.backgroundColor;
   }

  ngOnInit() {
  } 

}
