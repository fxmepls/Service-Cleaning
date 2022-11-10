import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService { 

  /**
   * берем инфо о продуктах с json сервера
   */
  url: string = 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }
/**
 * возвращает все продукты
 * @returns 
 */
  getProducts() {
    return this.http.get<IProducts[]>(this.url)
  }
/**
 * возвращает конкретный продукт
 * @param id
 * @returns 
 */
  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`);
  }

}
