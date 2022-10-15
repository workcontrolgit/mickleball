import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '../@shared/models/form-field';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel45Service {
  constructor() {}

  getFormFields() {
    const ratings: { key: string; value: string }[] = [
      { key: '0', value: 'Not observed or not able to execute' },
      { key: '1', value: 'Attempted but very poorly executed/needs work' },
      { key: '2', value: 'Good basic form, but needs work' },
      { key: '3', value: 'Solid, consistent performance' },
    ];
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-1',
        label: '1. Consistently controls and places serves and return of serves',
        options: ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-2',
        label: '2. Serves with power accuracy and depth and can vary speed and spin of serve',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-3',
        label:
          '3. Consistent and dependable forehand groundstroke using pace and depth to generate opponent’s error to set up next shot',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-4',
        label: '4. Can effectively/consistently direct the ball with the backhand, varying depth and pace',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-5',
        label:
          '5. Ability to place dink with high success at changing shot types while playing both consistently and with offensive intent',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-6',
        label: '6. Recognizes and attempts to hit attackable dinks',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-7',
        label: '7. Consistently executes effective 3rd shot strategies that are not easily returned',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-8',
        label: '8. Able to intentionally and consistently place the 3rd shot drop',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-9',
        label: '9. Able to block hard volleys directed at them and consistently drop them in NVZ',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-10',
        label: '10. Comfortable hitting swinging volleys and hits overhead shots consistently as putaways',
        options: ratings,
        required: true,
        order: 10,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '11. Poaches effectively',
        options: ratings,
        required: true,
        order: 11,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '12. Has effective lobs and creates coverage gaps and hits to these gaps consistently',
        options: ratings,
        required: true,
        order: 12,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '13. Has good footwork and moves laterally, forward and backward well',
        options: ratings,
        required: true,
        order: 13,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '14. Very comfortable playing at the NVZ',
        options: ratings,
        required: true,
        order: 14,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '15. Communicates and moves well with partner – easily “stacks” court positions',
        options: ratings,
        required: true,
        order: 15,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label:
          '16. Understands strategy and can adjusts style of play and game plan according to the opponent’s strengths and weaknesses and court position',
        options: ratings,
        required: true,
        order: 16,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '17. Limited number of unforced errors',
        options: ratings,
        required: true,
        order: 17,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '18. Has good mobility/quickness',
        options: ratings,
        required: true,
        order: 18,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill4-11',
        label: '19. Has good hand-eye coordination',
        options: ratings,
        required: true,
        order: 19,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
