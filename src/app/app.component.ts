import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLinkActive="activeHome" routerLink="home">Home | </a> 
    <a routerLinkActive="activeAbout" routerLink="about">About | </a> 
    <a routerLinkActive="activeContact" [routerLink]="['contact', 'a', 'b', 'c']">Contact</a>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [
    ".activeHome{color:red}",
    ".activeContact{color:green}", 
    ".activeAbout{color:yellow}"]
})
export class AppComponent {

}
