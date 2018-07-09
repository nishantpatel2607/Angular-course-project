import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({ 
  selector: 'app-reactive-form-formarray',    
  templateUrl: './reactive-form-formarray.component.html', 
  styleUrls: ['./reactive-form-formarray.component.css']
})
export class ReactiveFormFormarrayComponent {
 //Using formarray user can create an array of field set. In the following example 
 //an array of addresses
 //Examine the object created in signup procedure
 
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      fullName: [],
      addresses: this.fb.array([])
    });

  }

  buildAddress(): FormGroup {
    return this.fb.group({
      street: '',
      city: '',
      state: ''
    });
  }

  get addresses(): FormArray{
    return <FormArray>this.form.get('addresses');
  }

  addAddress(): void {
    
    this.addresses.push(this.buildAddress());
  }

  signUp() {
    console.log(JSON.stringify(this.form.value));
  }

}
