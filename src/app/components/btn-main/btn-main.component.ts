import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-main',
  templateUrl: './btn-main.component.html',
  styleUrls: ['./btn-main.component.css']
})
export class MainButtonComponent {
  @Input() btnName!:string;
}
