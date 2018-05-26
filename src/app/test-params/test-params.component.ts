import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-params',
  templateUrl: './test-params.component.html',
  styleUrls: ['./test-params.component.css']
})
export class TestParamsComponent implements OnInit {
  id: string;
  id2: string; 
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      params => {
        this.id = params['id']; 
        this.id2 = params['id2'];
      });
  }

 /*  SwitchMap - Cancels requests which are still resolving 
 and sends new request with latest params. 
 e.g retriving product with id 1 and user changes id to 2 
 in between the id 1 request will be cancelled and new request with id 2 will be sent.

import 'rxjs/add/operator/switchMap'; */

}
