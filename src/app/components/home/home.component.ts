import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `Home 
  <hr>
    {{homeid}}`
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute){
    // if(activatedRoute.snapshot.paramMap.has("id"))
    // this.homeid = Number(activatedRoute.snapshot.paramMap.get("id"));
    activatedRoute.paramMap.subscribe({
      next: param => this.homeid = Number(param.get("id"))
    })
  }
  homeid:number = 0;
}
