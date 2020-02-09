import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/app.service';
import { Project } from '@shared/models/project.interface';

@Component({
  selector: 'alo-project-container',
  templateUrl: 'project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectContainerComponent {
  project: Project;
  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.activatedRoute.params.subscribe(params => {
      this.project = this.appService.getProject(params.projectId);
    });
  }
}
