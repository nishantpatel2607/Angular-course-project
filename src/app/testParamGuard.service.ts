import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';


/* Routing Guards - it is a service that performs operations before a route is navigated
	used in authentication
	fetch some data before a component is displayed
	Perform some operation before leaving the page
if Guard
 returns true, the navigation process continues.
 returns false, the navigation process stops and the user stays put. */

@Injectable()
export class TestParamGuard implements CanActivate{
  
  canActivate(route: ActivatedRouteSnapshot) : boolean{
    let id = +route.url[2].path;
    if (isNaN(id) || id > 10){
      alert('Invalid Id');
      this._router.navigate(['']); //home component
      return false;
    }
    return true;   
  }

  constructor(private _router: Router) {
  }
}
