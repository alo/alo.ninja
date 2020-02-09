import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectContainerComponent } from './containers/project/project.component';


const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':projectId', component: ProjectContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
