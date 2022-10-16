import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '../@shared/models/form-field';

@Injectable({
  providedIn: 'root',
})
export class FormfieldSignatureService {
  constructor() {}

  getFormFields() {
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'textarea',
        key: 'message',
        label: 'Comments/Notes',
        type: 'textarea',
        order: 1,
      }),

      new FormField<string>({
        controlType: 'checkbox',
        key: 'agree',
        label: 'I hereby declare that the assessment is true and correct to the best of my knowledge.',
        type: 'checkbox',
        required: true,
        order: 2,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
