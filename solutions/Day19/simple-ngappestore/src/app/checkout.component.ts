import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Checkout</h2>
    <p>Order placed successfully!</p>
  `
})
export class CheckoutComponent {}
