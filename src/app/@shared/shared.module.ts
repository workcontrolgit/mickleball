import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ToastComponent } from './toast/toast.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  declarations: [LoaderComponent, ConfirmationDialogComponent, ToastComponent],
  exports: [LoaderComponent, ConfirmationDialogComponent, ToastComponent],
  providers: [],
})
export class SharedModule {}
