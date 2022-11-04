import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactComponent } from './components/contacts/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
    children: [
      {path: 'contacts', component: ContactComponent},
      {path: 'contacts/user/:id', component: ContactDetailsComponent},
      {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},

    ]
}
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
