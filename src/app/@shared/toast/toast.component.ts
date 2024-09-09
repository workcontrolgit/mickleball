import { Component, TemplateRef } from '@angular/core';
import { ToastService } from '@app/services/dialog/toast.service';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-toasts',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    host: { '[class.ngb-toasts]': 'true' },
    standalone: true,
    imports: [
        NgFor,
        NgbToast,
        NgIf,
        NgTemplateOutlet,
    ],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
