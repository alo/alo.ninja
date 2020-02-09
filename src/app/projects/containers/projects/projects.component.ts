import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Project } from '@shared/models/project.interface';

@Component({
  selector: 'alo-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private appService: AppService) {
    this.projects = this.appService.getData().projects;
  }
}
