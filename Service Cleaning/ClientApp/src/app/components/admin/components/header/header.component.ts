import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Route, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute)  { }

  private showLoader!: Observable<boolean>
  private hideLoader!: Observable<boolean>
  isLoading!: Observable<boolean>
  
  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false)) 

    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true)) 
 
    this.isLoading = merge(this.hideLoader, this.showLoader)
  }
  
}
