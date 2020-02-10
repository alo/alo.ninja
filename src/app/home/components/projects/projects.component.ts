import { Component, Input } from '@angular/core';

import { Project } from '@shared/models/project.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'alo-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projects: Project[];

  constructor(private router: Router) {}

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
