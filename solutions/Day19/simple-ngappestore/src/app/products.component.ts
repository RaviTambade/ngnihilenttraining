import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Products</h2>
    <ul>
      <li *ngFor="let p of products" (click)="go(p.id)">
        {{p.name}}
      </li>
    </ul>
  `
})
export class ProductsComponent {
  products = [
    {id: 1, name: 'Laptop'},
    {id: 2, name: 'Phone'}
  ];
  constructor(private router: Router) {}
  go(id: number) { this.router.navigate(['/products', id]); }
}
