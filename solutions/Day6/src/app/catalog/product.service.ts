import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Observable, of } from 'rxjs';  


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  // fallback sample data
  private products: Product[] = [
      {"id": 12,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg"},
      {"id": 13,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg"},
      {"id": 14,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg"},
      {"id": 15,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg"},
      {"id": 16,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg"},
      {"id": 17,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg"},
  ]

  constructor() { }
 
  getAll(): Observable<Product[]> {
    // return this.http.get<Product[]>(this.api);
    return of(this.products);
  }

  
  getById(id: number): Observable<Product | undefined> {
    // return this.http.get<Product>(`${this.api}/${id}`);
    return of(this.products.find(p => p.id === id));
  }



}