import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Template-driven approach can also be used for forms,
// but here we are using Reactive Forms approach
//1.Template forms 
//  are defined using ngModel, ngForm directive in template
//2.Reactive forms are defined using FormGroup and FormControl in component class

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder) {

    //Model-driven form creation
    //constraints/validation can be added here
    //initializatin of formcontrols
    //fetch data from rest api and patch the values to formcontrols

    this.loginForm = this.fb.group({
      email: ['', Validators.required],   //Formcontrol with validation
      password: ['', Validators.required] //Formcontrol with validation
    });
  }

 
  onSubmit() {
    if (this.loginForm.valid) {
      this.message = 'Login submitted: ' + JSON.stringify(this.loginForm.value);
    }
  }
}
