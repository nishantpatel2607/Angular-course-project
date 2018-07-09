/* Angular manages the components lifecycle
	- Create the component
	- Renders the component
	- Creates and renders the component children
	- Checks when the component bound properties are changed
	- Destroy the component

life cycles hooks execution order:
	ngOnChanges
	ngOnInit
	ngDoCheck
		ngAfterContentInit
		ngAfterContentChecked
		ngAfterViewInit
		ngAfterViewChecked
  ngOnDestroy
  
  https://angular.io/guide/lifecycle-hooks
 */
 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'life-cycle-parent', 
  templateUrl: './life-cycle-parent.component.html',
  styleUrls: ['./life-cycle-parent.component.css']
})
export class LifeCycleParentComponent implements OnInit {

  userValue:string = "Orange";
  showChild:boolean=true; 
  constructor() { }

  ngOnInit() {
    
  }

  toggle(){
    this.showChild = !this.showChild; 
  }

}
