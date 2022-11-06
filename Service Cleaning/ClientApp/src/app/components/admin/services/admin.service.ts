import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

getPersonalList(){
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10') //пока вместо базы данных списки сотрудников
}
getPersonal(id: number){
  return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
}
}