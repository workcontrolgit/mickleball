import { Injectable, Injector } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorDialogService {
  // private opened = false;

  constructor(private injector: Injector) //private modalService: NgbModal
  {}

  openDialog(message: string, status?: number): void {
    var modalService = this.injector.get(NgbModal);
    //const modalRef = this.modalService.open(ErrorDialogComponent);

    const modalRef = modalService.open(ErrorDialogComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.status = status;
  }
}
