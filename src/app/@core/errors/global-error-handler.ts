import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { ErrorDialogService } from '@shared/errors/error-dialog.service';
import { ToastService } from '@app/services/toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { ConfirmationDialogService } from '@app/services/confirmation-dialog.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone,
    public toastService: ToastService,
    private injector: Injector
  ) //private confirmationDialogService: ConfirmationDialogService,
  {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    console.log(error);
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }
    this.zone.run(() => this.errorDialogService.openDialog(error?.message || 'Undefined client error', error?.status));

    // this.zone.run(() =>
    //   this.errorDialogService.openDialog(
    //     error?.message || 'Undefined client error',
    //     error?.status
    //   )
    // );
    // var modalService = this.injector.get(NgbModal);
    // var zone = this.injector.get(NgZone);
    // zone.run(() => modalService.open('ERROR HAPPENED', {}));

    // this.zone.run(() =>
    // this.toastService.show(error?.message || 'Undefined client error', {
    //   classname: 'bg-warning text-light',
    //   delay: 20000,
    //   autohide: true,
    //   headertext: error?.status,
    // })

    // );

    console.error('Error from global error handler', error);
  }
}
