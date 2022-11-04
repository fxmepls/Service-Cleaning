import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  personalList!: Observable<User[]>

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.personalList = this.adminService.getPersonalList()
  }

}
