import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cssclass',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cssclass.component.html',
  styleUrl: './cssclass.component.css'
})
export class CSSClassComponent {
  isActive = true;

  toggle() {
    this.isActive = !this.isActive;
  }
}
