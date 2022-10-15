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
        label: 'Additional Information (link to match on Youtube, recent tournaments, etc.',
        type: 'textarea',
        order: 1,
      }),

      new FormField<string>({
        controlType: 'checkbox',
        key: 'agree',
        label:
          'I hereby declare that the information provided is true and correct to the best of my knowledge and belief.',
        type: 'checkbox',
        required: true,
        order: 2,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
