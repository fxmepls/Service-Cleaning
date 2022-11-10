import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: IProducts[];
  productsSubcription!: Subscription;

  canEdit:  boolean = false;

  constructor(private ProductsService: ProductsService, public dialog: MatDialog) { }
/**
 * подписка на продукты (можно убрать)
 */
  ngOnInit(): void {

//сделать проверку на админа
    this.canEdit = true;
     this.productsSubcription = this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '700px',
      data: 123
    });
  }

ngOnDestroy() {
  if(this.productsSubcription) this.productsSubcription.unsubscribe();
  }
}
