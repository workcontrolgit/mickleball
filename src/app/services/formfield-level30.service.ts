import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '@shared/models/form-field';
import { Constants } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel30Service {
  constructor(private constants: Constants) {}

  getFormFields() {
    var ratings = this.constants.Ratings;
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-1',
        label: '1. Able to hit a medium paced forehand with direction and consistency',
        options: this.constants.Ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-2',
        label: '2. Able to hit a medium paced backhand with direction and consistency',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-3',
        label: '3. Able to hit a medium paced serve with depth, direction and consistency',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-4',
        label: '4. Able to consistently sustain a dink rally with control',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-5',
        label: '5. Able to hit a medium paced 3rd shot with direction',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-6',
        label: '6. Able to hit a medium paced volley with direction and consistency',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-7',
        label: '7. Understands the fundamentals of the game',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-8',
        label: '8. Understands proper court positioning',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-9',
        label: '9. Understands rules and can keep score',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-10',
        label: '10. Has good mobility, quickness, and hand-eye coordination',
        options: ratings,
        required: true,
        order: 10,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill30-11',
        label: '11. Has started playing in tournaments',
        options: ratings,
        required: true,
        order: 11,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
