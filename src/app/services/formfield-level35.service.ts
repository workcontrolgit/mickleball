import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '../@shared/models/form-field';
import { Constants } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel35Service {
  constructor(private constants: Constants) {}

  getFormFields() {
    var ratings = this.constants.Ratings;

    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-1',
        label: '1. Able to use a forehand with moderate level of shot control',
        options: ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-2',
        label: '2. Able to use a backhand with moderate level of shot control',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-3',
        label: '3. Consistently gets serve in',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-4',
        label: '4. Consistently gets return of serve in',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-5',
        label: '5. Able to place serves deep in the court',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-6',
        label: '6. Able to place return of serves deep into the court',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-7',
        label: '7. Able to dink and sustains medium length rallies',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-8',
        label: '8. Able to control height/depth of dink shot',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-9',
        label: '9. Understands variation of pace of dink shot',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-10',
        label: '10. Able to hit a 3rd shot drop to gain advantage to the net',
        options: ratings,
        required: true,
        order: 10,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '11. Able to volley with medium paced shots with control',
        options: ratings,
        required: true,
        order: 11,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '12. Sustains a short volley session at the next with placement and control',
        options: ratings,
        required: true,
        order: 12,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '13. Moves quickly to NVZ (non-volley zone) when opportunity is there',
        options: ratings,
        required: true,
        order: 13,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '14. Understands proper court position',
        options: ratings,
        required: true,
        order: 14,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '15. Understands difference b/w hard game and soft game and knows when to use it',
        options: ratings,
        required: true,
        order: 15,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '16. Basic knowledge of stacking and knows when to use it',
        options: ratings,
        required: true,
        order: 16,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '17. Able to sustain short rallies',
        options: ratings,
        required: true,
        order: 17,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '18. Has good mobility, quickness, and hand-eye coordination',
        options: ratings,
        required: true,
        order: 18,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
