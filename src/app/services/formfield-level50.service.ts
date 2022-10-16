import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '../@shared/models/form-field';
import { Constants } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel50Service {
  constructor(private constants: Constants) {}

  getFormFields() {
    var ratings = this.constants.Ratings;

    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-1',
        label: '1. Has developed a very high level of variety, depth and pace of serves',
        options: ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-2',
        label: '2. Serves with power accuracy and depth and can vary speed and spin of serve',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-3',
        label:
          '3. Has a high level of accuracy and dependable forehand groundstroke using pace and depth to generate opponent’s error to set up next shot',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-4',
        label:
          '4. Has a high level of accuracy directing the ball with the backhand, varying depth and pace with control to set up offensive situations',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-5',
        label: '5. Has mastered the dink with shot placement and ability to move opponents',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-6',
        label: '6. Exhibits patience during rallies with ability to create opportunities to attack using dinks',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-7',
        label: '7. Increased ability to change the pace of dinks strategically',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-8',
        label:
          '8. Mastered the 3rd shot choices and strategies. Able to drop and drive ball from both the forehand and backhand side with high level consistency',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-9',
        label: '9. Able to intentionally and consistently place the 3rd shot drop',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-10',
        label: '10. Able to block hard volleys directed at them and consistently drop them in NVZ',
        options: ratings,
        required: true,
        order: 10,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label: '11. Places overheads with ease for winners',
        options: ratings,
        required: true,
        order: 11,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label: '12. Able to volley shots toward opponent’s feet consistently',
        options: ratings,
        required: true,
        order: 12,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label:
          '13. Comfortable with swinging volley in both initiating and ability to attack back or neutralize return',
        options: ratings,
        required: true,
        order: 13,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label: '14. Efficient footwork and effective use of weight transfer for improved quickness on court',
        options: ratings,
        required: true,
        order: 14,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label:
          '15. Easily and quickly adjusts style of play and game plan according to the opponent’s strengths and weaknesses and court position',
        options: ratings,
        required: true,
        order: 15,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label: '16. Rarely makes unforced errors',
        options: ratings,
        required: true,
        order: 16,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill50-11',
        label: '17. Has good mobility, quickness, and hand-eye coordination',
        options: ratings,
        required: true,
        order: 17,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
