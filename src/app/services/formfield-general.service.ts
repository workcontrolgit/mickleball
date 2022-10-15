import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '../@shared/models/form-field';

@Injectable({
  providedIn: 'root',
})
export class FormfieldGeneralService {
  constructor() {}

  getFormFields() {
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'textbox',
        key: 'name',
        label: 'Name',
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'textbox',
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validator: 'email',
        order: 2,
      }),

      new FormField<string>({
        controlType: 'textbox',
        key: 'assessmentDate',
        label: 'Assessment Date',
        type: 'date',
        required: true,
        validator: 'email',
        order: 3,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
