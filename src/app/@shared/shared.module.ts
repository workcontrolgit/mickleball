import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ToastComponent } from './toast/toast.component';
import { ReactiveFormsModule } from '@angular/forms';

// Global error handler
import { ErrorDialogComponent } from '@shared/errors/error-dialog/error-dialog.component';

const sharedComponents = [LoaderComponent, ConfirmationDialogComponent, ToastComponent, ErrorDialogComponent];

@NgModule({
    imports: [CommonModule, NgbModule, ReactiveFormsModule, sharedComponents],
    exports: [sharedComponents],
    providers: [],
})
export class SharedModule {}
