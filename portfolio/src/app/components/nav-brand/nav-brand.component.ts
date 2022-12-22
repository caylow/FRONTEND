import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.css']
})
export class NavBrandComponent {
  @Input() brandName!:string;
}
