import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() cards:{[key:string]:(string)}[] = [
    {
      "title": "Card Title #1",
      "description": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non adipisci excepturi impedit, nulla facilis iure incidunt, nobis rerum laborum sint consectetur voluptate quo blanditiis cum officiis alias eaque? Asperiores, maxime.',
    },
    {
      "title": "Card Title #2",
      "description": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non adipisci excepturi impedit, nulla facilis iure incidunt, nobis rerum laborum sint consectetur voluptate quo blanditiis cum officiis alias eaque? Asperiores, maxime.',
    },
  ];
}
