import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';


import { HeaderComponent } from './components/user/UI/header/header.component';
import { BaseComponent } from './components/user/base/base.component';
import { ProductsComponent } from './components/user/products/products.component';
import { ProductsDetailsComponent } from './components/user/products-details/products-details.component';
import { BasketComponent } from './components/user/basket/basket.component';
import { ProductResolver } from './services/product.resolver';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { DialogBoxComponent } from './components/user/dialog-box/dialog-box.component';
import {MatMenu, MatMenuModule} from '@angular/material/menu';


const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsDetailsComponent, resolve: {data: ProductResolver}},
  {path: 'basket', component: BasketComponent},



  {path: 'login', component: LoginComponent},
 // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    canActivate: [AuthGuard], //запрещает переходить на страницу логина  или админа
    canDeactivate: [AuthGuard],
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule) //импортирует детей admin
  },
  
  {path: '**', component: NotFoundComponent},
];

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatDialogModule,
  BrowserAnimationsModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatMenuModule
]


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    NotFoundComponent, 

    HeaderComponent,
    ProductsComponent, 
    ProductsDetailsComponent, 
    BaseComponent,
    BasketComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    [modules]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
