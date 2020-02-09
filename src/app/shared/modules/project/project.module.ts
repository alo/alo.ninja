import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './components/project/project.component';
import { MatCardModule } from '@angular/material/card';
import { SocialLinksModule } from '../social-links/social-links.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, MatCardModule, SocialLinksModule],
  exports: [ProjectComponent]
})
export class ProjectModule {}
