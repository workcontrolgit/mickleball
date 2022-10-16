import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '@shared/models/form-field';
import { Constants } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel20Service {
  constructor(private constants: Constants) {}

  getFormFields() {
    var ratings = this.constants.Ratings;
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-1',
        label: '1. Minimal understanding of the basic rules of the game i.e. 2 bounce rule',
        options: this.constants.Ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-2',
        label: '2. Knows how to keep score',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-3',
        label: '3. Demonstrates a forehand',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-4',
        label: '4. Demonstrates a backhand',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-5',
        label: '5. Demonstrates a volley',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-6',
        label: '6. Accurately places serve into the correct square',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-7',
        label: '7. Knows where to stand when serving and returning serve',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-8',
        label: '8. Has good mobility moving in a safe and balanced manner',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-9',
        label: '9. Has good quickness',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill20-10',
        label: '10. Has good hand-eye coordination',
        options: ratings,
        required: true,
        order: 10,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
