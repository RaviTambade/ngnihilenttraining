import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'http://localhost:4200/flowers';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}
