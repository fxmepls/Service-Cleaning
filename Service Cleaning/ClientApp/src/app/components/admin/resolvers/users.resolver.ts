import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

constructor(private adminService: AdminService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.adminService.getPersonalList().pipe(
      delay(2), //пока имитация загрузки сервера
    )
  }
}
