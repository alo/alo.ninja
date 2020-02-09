import { Component, Input } from '@angular/core';
import { ProfilePic } from '@shared/models/profile-pic.interface';
import { Link } from '@shared/models/link.interface';

@Component({
  selector: 'alo-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent {
  @Input() name: string;
  @Input() mainDescription: string;
  @Input() position: string;
  @Input() profilePic: ProfilePic;
  @Input() socialLinks: Link[];

  constructor() {}
}
