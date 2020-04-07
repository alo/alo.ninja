import { Component, OnInit } from '@angular/core';

import { ScullyRoutesService } from '@scullyio/ng-lib';
import { MainDescription } from '@shared/models/main-description.interface';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'alo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: MainDescription;

  constructor(
    public scully: ScullyRoutesService,
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit() {
    this.router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: item.url,
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}
