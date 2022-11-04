import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id!: number;
  user!: Observable<User>;
  constructor(private activateRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => this.id = params?.['id'])
    this.user = this.adminService.getPersonal(this.id)
  }

}
