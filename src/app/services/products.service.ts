import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpHeaders = new HttpHeaders(environment.headers);

  constructor(public http: HttpClient) {
  }

  getProductList(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}Products`, {headers: this.httpHeaders});
  }
}
