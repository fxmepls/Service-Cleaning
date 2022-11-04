import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<User> {

  constructor(private adminService: AdminService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    return this.adminService.getPersonal(route.params?.['id']).pipe(
      delay(2), //пока имитация загрузки сервера
      catchError(() => {
        this.router.navigate(['admin/contacts'])
        return EMPTY
      })
    )
  }
}
