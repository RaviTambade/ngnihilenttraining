import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>

    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <table>
      <tr>
      <td><label>Email:</label></td>
      <td><input type="email" formControlName="email"></td>
      <td><div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
        Email is required
      </div></td>
      </tr>
      <tr>
      <td><label>Password:</label></td>
      <td><input type="password" formControlName="password"></td>
      <td><div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
        Password is required
      </div></td>
      </tr>
      <tr>
       <button type="submit" [disabled]="loginForm.invalid">Login</button>

      </tr>
      </table>

         </form>

    <p>{{ message }}</p>
  `
})
export class LoginComponent {
  loginForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.message = 'Login submitted: ' + JSON.stringify(this.loginForm.value);
    }
  }
}
