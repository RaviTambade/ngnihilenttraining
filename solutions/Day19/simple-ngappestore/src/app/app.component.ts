import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  template: `
    <h1>Product List</h1>
    <a routerLink="/products">Go to Products</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
