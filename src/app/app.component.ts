import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLinkActive="activeHome" [routerLink]="['home']" >Home | </a> 
    <a routerLinkActive="activeAbout" routerLink="about">About | </a> 
    <a routerLinkActive="activeContact" [routerLink]="['contact', 'a', 'b', 'c']">Contact | </a>
    <a routerLinkActive="activeProducts" routerLink="products">Products | </a>
    <a routerLinkActive="activeDashboard" routerLink="dashboard">Dashboard | </a>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [
    ".activeHome{color:red}",
    ".activeContact{color:green}", 
    ".activeAbout{color:yellow}",
  ".activeProducts{color:aqua}",
  ".activeDashboard{color:orange}",]
})
export class AppComponent {
  
}
