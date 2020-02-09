import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [SocialLinksComponent, ConfirmDialogComponent],
  exports: [SocialLinksComponent, ConfirmDialogComponent],
  imports: [CommonModule]
})
export class SocialLinksModule {}
