import { AbstractControl } from '@angular/forms';

//This is a custom validator to check passwords. 
//The class can contain multiple methods for validation.
//The following class has just one validation method. 

export class PasswordValidators {
    static passwordsShouldMatch(form: AbstractControl) {
        let newPassword = form.get('password');
        let confirmPassword = form.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value){
            //control.setErrors({ passwordsShouldMatch: true });
            return { passwordsShouldMatch: true };
        }
        
        return null;
    }
}