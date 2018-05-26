import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html', 
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave($event){
    $event.stopPropagation(); // To stop event propogation or bubbling
    alert('Save button clicked...');
    console.log($event);
  }

  onDivClicked(){
    console.log('DIV clicked');
  }

  //event filtering
  onKeyUp($event){
    console.log($event);
    if ($event.keyCode === 13) console.log('Enter was pressed...');
  }

  onKeyUp2(){
    console.log('Enter was pressed...');
  }
}
