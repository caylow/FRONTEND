import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() cardTitle!:string | number;
  @Input() cardPercentage!:string | number;
  @Input() faClass!:string | number;
}
