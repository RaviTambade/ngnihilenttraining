import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products= [
    {"id": 11,  "title":"Gerbera", "description": "Wedding flower","price":4},
    {"id": 12,  "title":"Rose", "description": "Wedding flower","price":4},
    {"id": 13,  "title":"Tulip", "description": "Wedding flower","price":4  },
    {"id": 14,  "title":"Lotus", "description": "Wedding flower","price":4  },
    {"id": 15,  "title":"Gerbera", "description": "Wedding flower","price":4  },
]

 
 constructor() {}

  // GET all products
  getProducts(): any {
    
    return this.products;
  }

  // GET product by ID
  getProductById(id: number): any {
    
   return this.products[id];
  }

  // POST create product
  createProduct(product: Product): any {
    
    return product;
  }

  // PUT update product
  updateProduct(product: Product): any {
    
    return product;
  }

  // DELETE product
  deleteProduct(id: number): any {
    
    return this.products[id];
  }
}
