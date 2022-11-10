import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  product!: IProducts;
  productSubscribtion!: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productSubscribtion = this.route.data.subscribe((data) => {
      this.product = data['data'];
    })
  }

}
