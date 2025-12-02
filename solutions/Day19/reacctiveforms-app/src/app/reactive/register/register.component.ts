import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minSpecialChars } from '../minspelchars';

@Component({
  selector: 'app-register',
  template: `
    <h2>Register</h2>

    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
    <table>
      <tr>
          <td><label>Name:</label></td>
          <td><input formControlName="name"></td>
          <td>
              <div *ngIf="registerForm.get('name')?.invalid && registerForm.get('name')?.touched">
                    Name is required
              </div>
          </td>
      </tr>
      <tr>
      <td><label>Email:</label></td>
      <td><input type="email" formControlName="email"></td>
      <td>
        <div *ngIf="registerForm.get('email')?.invalid && registerForm.get('email')?.touched">
          Email is required
        </div>
      </td>
      </tr>
      <tr>
      <td><label>Password:</label></td>
      <td><input type="password" formControlName="password"></td>
      <td><div *ngIf="registerForm.get('password')?.errors?.['noNumber'] 
                && registerForm.get('password')?.touched">
                Password must contain at least two  special characters.
          </div>
      </td>
      </tr>
      <tr>
       <td colspan="3">
         <button type="submit" [disabled]="registerForm.invalid">Register</button>
       </td>
      </tr>
    </table>
    </form>
    <p>{{ message }}</p>
  `
})
export class RegisterComponent {
  registerForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), minSpecialChars(2)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.message = 'Registration submitted: ' + JSON.stringify(this.registerForm.value);
    }
  }
}


/*
<div *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched">
        Password is required (min 6 chars)
      </div>
*/