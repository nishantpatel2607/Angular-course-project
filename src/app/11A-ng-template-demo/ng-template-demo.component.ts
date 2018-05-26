import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-demo',  
  templateUrl: './ng-template-demo.component.html',
  styleUrls: ['./ng-template-demo.component.css']
})
export class NgTemplateDemoComponent implements OnInit {

  courses=[];
  constructor() { }

  ngOnInit() {
  }

  loadCourses(){
    this.courses = null; 
    setTimeout(() =>{ this.courses = [
      {"id":1,"name":"course 1"},
      {"id":2,"name":"course 2"},
      {"id":3,"name":"course 3"}
    ]},5000);
  }

}
