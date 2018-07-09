import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-content-directive',   
  templateUrl: './ng-content-directive.component.html', 
  styleUrls: ['./ng-content-directive.component.css']
})
export class NgContentDirectiveComponent implements OnInit {

  constructor() { }   

  ngOnInit() { 
  }

  //Paste the following code in app.component.html and check the output
  //in the below example both div elements are passed in this component and will be displayed in
  //corresponding sections
   
  /* <ng-content-directive>
        <div class="heading"> HEADING </div>
        <div class="body"> BODY </div>
</ng-content-directive>

//ng-container will copy pass only text  
<ng-content-directive>
        <ng-container class="heading"> HEADING </ng-container>
		<ng-container class="body"> BODY </ng-container>
</ng-content-directive> */

}
