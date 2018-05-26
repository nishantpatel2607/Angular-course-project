import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',   
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

  log(x)
  {
    console.log(x);
  }

  submit(form){
    console.log(form);
  }

}
