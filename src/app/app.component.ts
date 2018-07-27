import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Meta, Title } from '@angular/platform-browser';
import { MainDescription } from './models/main-description.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(
    private appService: AppService,
    private meta: Meta,
    private title: Title
  ) {}

  data: MainDescription;

  ngOnInit() {
    this.data = this.appService.getData();
    this.title.setTitle(this.data.title);
    this.meta.addTags(this.data.metas);
  }
}
