import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  template: `
  <h1>Products</h1> <br>
  <h2>Route Data Passing - {{_data['key1']}}, {{_data['key2']}}</h2>

  <ul>
    <li *ngFor="let photo of photos"><a [routerLink]="[photo.id]">{{photo.url}}</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class ProductsComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this._data = router.getCurrentNavigation()?.extras.state;
  }
  _data: any;
  photos;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => this.photos = data["data_photos"]);
  }
}
