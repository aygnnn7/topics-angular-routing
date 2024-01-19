import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  template: `
  Products <br>
  <ul>
    <li *ngFor="let photo of photos"><a [routerLink]="[photo.id]">{{photo.url}}</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class ProductsComponent {
  constructor(private activatedRoute:ActivatedRoute){}

  photos;
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data: any) => this.photos = data["data_photos"]);
  }
}
