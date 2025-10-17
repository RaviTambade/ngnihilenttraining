import { Component } from '@angular/core';
import {Credential} from './Credential';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  

  isValidUser:boolean=false;
  user: Credential=new Credential("seed","ravi.tambade@transflower.in");

  constructor(){
    
  }

  ngOnInit(){
    this.user=new Credential("ibm","sana.khan@transflower.in");
  }

  onSubmit(form: any): void {
  
    if(this.user.email==="ravi.tambade@transflower.in" && this.user.password==="seed"){
      console.log("Valid User !");
    }
    else{
      console.log("Invalid User !");
    }   
}

}
