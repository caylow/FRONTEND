import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @Input() hardSkillsCards:{[key:string]:(string | number)}[] = [
    {
      "title": "HTML",
      "percentage": 60,
      "class": "fa-brands fa-html5"
    },
    {
      "title": "CSS",
      "percentage": 40,
      "class": "fa-brands fa-css3"
    },
    {
      "title": "JS",
      "percentage": 30,
      "class": "fa-brands fa-js"
    },
  ];
  @Input() softSkillsCards:{[key:string]:(string | number)}[] =[
    {
      "title": "Resolución de problemas",
      "percentage": 80,
      "class": "fa-regular fa-lightbulb"
    },
    {
      "title": "Comunicación",
      "percentage": 40,
      "class": "fa-regular fa-comment"
    },
    {
      "title": "Diseño de Sistemas",
      "percentage": 55,
      "class": "fa-regular fa-comment"
    },
  ];
}
