import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from '../../user'
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})

export class ContactsDetailsComponent implements OnInit {
  user!: Observable<User>;
  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe((params) => this.id = params?.['id']) //отлавливаем id при переходе на страницу с детальным описанием работника
    this.user = this.adminService.getPersonal(this.id) */
    this.user = this.activatedRoute.data.pipe(map((data) => data?.['user'])) //обращаемся к резолверу, т.к. он получил уже данные
  }

}
