import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { fAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
    fAnimation,
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts){ }
  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  title:string = "portfolio";
  author:string = "Biondo JP";
  brandName:string = "JPB";
  navItemsArray:string[][] = [
    ["Inicio", "/"],
    ["Acerca de", "/acerca-de"],
    ["Contacto", "/contacto"],
  ];

}
