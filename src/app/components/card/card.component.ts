import { Component, Input } from '@angular/core';
import { MainButtonComponent } from '../btn-main/btn-main.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardTitle!:string;
  @Input() cardDescription!:string;
}
