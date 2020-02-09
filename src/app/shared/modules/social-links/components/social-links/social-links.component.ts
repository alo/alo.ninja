import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Link } from '@shared/models/link.interface';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'alo-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {
  @Input() socialLinks: Link[];
  constructor(public dialog: MatDialog) {}

  confirmDialog: MatDialogRef<ConfirmDialogComponent>;

  openDialog(link: Link): void {
    this.confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { link }
    });
  }
}
