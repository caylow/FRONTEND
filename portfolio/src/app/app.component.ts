import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "portfolio";
  author:string = "Biondo JP";
  brandName:string = "JPB";
  navItemsArray:string[][] = [
    ["Inicio", "/"],
    ["Acerca de", "/acerca-de"],
    ["Contacto", "/contacto"],
  ];

}
