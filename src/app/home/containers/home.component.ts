import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AppService } from '../../app.service';
import { MainDescription } from '@shared/models/main-description.interface';

@Component({
  selector: 'alo-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  data: MainDescription;

  constructor(private meta: Meta, private title: Title, private appService: AppService) {
    this.data = this.appService.getData();
    this.title.setTitle(this.data.title);
    this.meta.addTags(this.data.metas);
  }
}
