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

  /* <ng-content-directive>
        <div class="heading"> HEADING </div>
        <div class="body"> BODY </div>
</ng-content-directive>

<ng-content-directive>
        <ng-container class="heading"> HEADING </ng-container>
		<ng-container class="body"> BODY </ng-container>
</ng-content-directive> */

}
