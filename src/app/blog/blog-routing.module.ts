import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BlogComponent} from './blog.component';
import { BlogsComponent } from './containers/blogs/blogs.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: ':slug',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

