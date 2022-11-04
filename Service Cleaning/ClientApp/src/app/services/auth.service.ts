import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   /**
    * 
    * @param router
    */
  constructor(private router: Router) { 

  }
/**
 * Устанавливает токен
 * @param token 
 */
  setToken(token: string){ 
    localStorage.setItem('token', token)
  }
/**
 * возвращает токен
 * @returns 
 */
  getToken() {
    return localStorage.getItem('token')
  }
/**
 *  проверка на авторизацию
 * @returns
 */
  isLoggedIn() {
    return this.getToken() !== null;
  }
/**
 * проверка на авторизацию админа и установка его токена
 * @param userinfo 
 */
  login(userinfo: {email: string, password: string}): Observable<string | boolean> {
    if (userinfo.email === 'admin@gmail.com' && userinfo.password === 'admin123') {
      this.setToken('aklnfioalnwfkinaffseflsjkkkkkfjebfjs')
      return of(true)
    }
    return throwError(() => new Error('Failed login'))
  }

  logout(){
    this.router.navigate(['login'])
  }
}
