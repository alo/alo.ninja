import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SocialLinksComponent, ConfirmDialogComponent],
  exports: [SocialLinksComponent, ConfirmDialogComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule]
})
export class SocialLinksModule {}
