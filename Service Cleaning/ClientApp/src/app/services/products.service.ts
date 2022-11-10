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
  urlBasket: string = 'http://localhost:3000/basket'

  constructor(private http: HttpClient) { }
/**
 * возвращает все продукты
 * @returns 
 */
  getProducts() {
    return this.http.get<IProducts[]>(this.url);
  }
/**
 * возвращает конкретный продукт
 * @param id
 * @returns 
 */
  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`);
  }

  postProduct(product: IProducts) {
    return this.http.post<IProducts>(this.url, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  updateProduct(product: IProducts) {
    return this.http.put<IProducts>(`${this.url}/${product.id}`, product);

  }
  
  postProductToBasket(product: IProducts) {
    return this.http.post<IProducts>(this.urlBasket, product);
  }

  getProductFromBasket() {
    return this.http.get<IProducts[]>(this.urlBasket);
  }

  updateProductToBasket(product: IProducts) {
    return this.http.put<IProducts>(`${this.urlBasket}/${product.id}`, product);

  }

  deleteProductFromBasket(id: number) {
    return this.http.delete<any>(`${this.urlBasket}/${id}`);
  }
}
