import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contacts/contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    ContactDetailsComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
  
})
export class AdminModule { }
