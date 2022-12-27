import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'portfolio';
  navItemsArray:string[] = ["Inicio","Acerca de", "Contacto"];
}
