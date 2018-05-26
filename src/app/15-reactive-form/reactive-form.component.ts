import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator'; //custom validator
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',  
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit { 
  flag: boolean;
  form: FormGroup;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({ 
      
      fullName:['Full name here',Validators.required],
      address: new FormGroup({
        address1: new FormControl('', Validators.required),
        address2: new FormControl('')
      }),
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      emailSubscription:['']
    },{
      //This is a form level validator
      validator: PasswordValidators.passwordsShouldMatch
    })
  }

  ngOnInit() {
  }

  signUp(){
    console.log(JSON.stringify(this.form.value) );
  }

  //returns the reference of formcontrol object which are refered in html for validations
  get fullName(){
    return this.form.get('fullName');
  }

  get address1(){
    return this.form.get('address.address1');
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  get formErrors(){
    return this.form.errors;
  }

}
