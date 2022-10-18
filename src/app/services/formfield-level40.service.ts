import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '../@shared/models/form-field';
import { Constants } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel40Service {
  constructor(private constants: Constants) {}

  getFormFields() {
    var ratings = this.constants.Ratings;

    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-1',
        label: '1. Consistently hits forehand with depth and control',
        options: ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-2',
        label: '2. Consistently hits backhand with depth and control',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-3',
        label: '3. Consistently gets serve in with varying depth and speed',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-4',
        label: '4. Consistently gets return of serve in with varying depth and speed',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-5',
        label: '5. Consistent and dependable overheads (directional control, depth and placement)',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-6',
        label: '6. Accurate in placing lobs',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-7',
        label: '7. Able to sustain dink rally with control, height and depth of shot',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-8',
        label: '8. Understands which balls are attackable and those that are not in a dink rally',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-9',
        label: '9. Sustains a dink exchange with patience at the net to elicit a “put away” shot',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-10',
        label: '10. Consistently executes 3rd shot drop from the baseline to approach the net',
        options: ratings,
        required: true,
        order: 10,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '11. Able to change soft shots to power shots to create an advantage',
        options: ratings,
        required: true,
        order: 11,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '12. Able to volley a variety of shots at varying speeds',
        options: ratings,
        required: true,
        order: 12,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '13. Able to block and return fast, hard volleys',
        options: ratings,
        required: true,
        order: 13,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '14. Able to control NVZ (non-volley zone) keeping their opponents back',
        options: ratings,
        required: true,
        order: 14,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '15. Aware of partners position on the court and moves as a team',
        options: ratings,
        required: true,
        order: 15,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '16. Solid understanding of stacking and when and how it can be used effectively',
        options: ratings,
        required: true,
        order: 16,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '17. Demonstrates ability to change position in an offensive manner (switching)',
        options: ratings,
        required: true,
        order: 17,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '18. Demonstrates a broad knowledge of the rules of the game',
        options: ratings,
        required: true,
        order: 18,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '19. Has a moderate number of unforced errors per game',
        options: ratings,
        required: true,
        order: 19,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '20. Can identify opponents’ weaknesses and formulate plan to attack weaknesses',
        options: ratings,
        required: true,
        order: 20,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '21. Plays competitively in tournaments',
        options: ratings,
        required: true,
        order: 21,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill40-11',
        label: '22. Has good mobility, quickness, and hand-eye coordination',
        options: ratings,
        required: true,
        order: 22,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
