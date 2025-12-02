import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Product } from "./product";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list:any=[];

  constructor(private http:HttpClient) { }

  private  apiUrl:string="http://localhost:8000/flowers";

  getAllProducts():Observable<Product[]>
  { 
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  getProductById(id:number):Observable<Product>
  { 

    return this.http.get<Product>(this.apiUrl+"/"+id);
   //return this.list.find((p:any)=>{ return p.id ==id});
  }
  
  updateProduct(prod:any):void
  {
    this.http.put(this.apiUrl+"/"+ prod.id, prod);
  }
}
