import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: ` <h1>PRODUCT {{productid}} DETAILS..........</h1>`
})
export class ProductDetailComponent {
  constructor(private activetedRoute : ActivatedRoute){

  }
  productid : number;
  ngOnInit(){
    this.activetedRoute.paramMap.subscribe({next: param => this.productid = Number(param.get("id"))})
  }
}
