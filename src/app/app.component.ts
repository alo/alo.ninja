import { Component } from '@angular/core';

import { ScullyRoutesService } from '@scullyio/ng-lib';
import { MainDescription } from '@shared/models/main-description.interface';


@Component({
  selector: 'alo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public scully: ScullyRoutesService) {}

  data: MainDescription;
}
