import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-details',
  template: `
    <h2>Product Details</h2>
    <p>Product ID: {{id}}</p>
    <button (click)="checkout()">Add to Cart → Checkout</button>
  `
})
export class ProductDetailsComponent {
  id = this.route.snapshot.params['id'];
  constructor(private route: ActivatedRoute, private router: Router) {}
  checkout() { this.router.navigate(['/checkout']); }
}
