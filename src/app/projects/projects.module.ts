import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectModule } from '@shared/modules/project/project.module';
import { ProjectContainerComponent } from './containers/project/project.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectContainerComponent],
  imports: [CommonModule, ProjectsRoutingModule, ProjectModule, FlexLayoutModule, MatCardModule]
})
export class ProjectsModule {}
