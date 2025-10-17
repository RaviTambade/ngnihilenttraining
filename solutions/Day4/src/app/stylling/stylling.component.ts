import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'stylling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stylling.component.html',
  styleUrl: './stylling.component.css'
})
export class StyllingComponent {
textColor = 'green';
fontSize = 18;

changeStyle() {
  this.textColor = this.textColor === 'green' ? 'blue' : 'green';
  this.fontSize = this.fontSize === 18 ? 24 : 18;
}
}
