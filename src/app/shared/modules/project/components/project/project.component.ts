import { Component, Input } from '@angular/core';
import { Project } from '@shared/models/project.interface';

@Component({
  selector: 'alo-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project: Project;

  constructor() {}
}
