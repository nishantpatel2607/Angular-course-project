import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-directive',  
  templateUrl: './ng-for-directive.component.html', 
  styleUrls: ['./ng-for-directive.component.css']
})
export class NgForDirectiveComponent implements OnInit {

  courses;
  constructor() { }

  ngOnInit() { 
  }

  loadCourses(){
    this.courses = [
      {"id":1,"name":"course 1"},
      {"id":2,"name":"course 2"},
      {"id":3,"name":"course 3"}
    ]
  }

  trackCourse(index,course) {
    //if course present, return its id else undefined
    return course ? course.id : undefined;
  }

}
