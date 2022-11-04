import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, map, mapTo, merge, Observable } from 'rxjs';
import {AdminService} from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {




  personalList!: Observable<User[]>;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute)  { }

/**
 * Подгрузка loadboard при запросе
 */

  ngOnInit(): void {
   //this.personalList = this.adminService.getPersonalList()

   this.personalList = this.activatedRoute.data.pipe(map((data) => data?.['users'])) //обращаемся к резолверу, т.к. он получил уже данные



  }

}
