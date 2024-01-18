import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
  Products <br>
  <a [routerLink]="['product-detail', 1]"> Product 1 Details</a> <br>
  <a [routerLink]="['product-detail', 2]"> Product 2 Details</a> <br>
  <a [routerLink]="['product-detail', 3]"> Product 3 Details</a> <br>
  <router-outlet></router-outlet>
  `
})
export class ProductsComponent {
  
}
