import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameters',
  templateUrl: './query-parameters.component.html',
  styleUrls: ['./query-parameters.component.css']
})
export class QueryParametersComponent implements OnInit {

  page: number;
  list: string;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(
      params => {
        this.page = +params['page'];
        this.list = params['list'];
      }); //queryparameters?page=20&list=test
  }


}
