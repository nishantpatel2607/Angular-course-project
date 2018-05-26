import { Component } from '@angular/core';

@Component({ 
  selector: 'app-custom-pipe',  
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent  {

  cityname: string = "vadodara"; 
  population:number = 4166000;
  salary:number = 10000;
  price:number = 123;
  dt = "01/01/2018";
  aboutCity:string = `Vadodara District is a district in the eastern part of the state of Gujarat in western India. 
  The city of Vadodara (Baroda), in the western part of the district, is the administrative headquarters. `;

  constructor() { }

 
}
