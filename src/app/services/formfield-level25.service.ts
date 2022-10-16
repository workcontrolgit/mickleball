import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '@shared/models/form-field';
import { Constants } from '@app/config/constants';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel25Service {
  constructor(private constants: Constants) {}

  getFormFields() {
    var ratings = this.constants.Ratings;
    const inputs: FormField<string>[] = [
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-1',
        label: '1. Knows the basic rules of the game including the 2 bounce rule',
        options: this.constants.Ratings,
        required: true,
        order: 1,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-2',
        label: '2. Able to hit a forehand with direction',
        options: ratings,
        required: true,
        order: 2,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-3',
        label: '3. Able to hit a backhand with direction',
        options: ratings,
        required: true,
        order: 3,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-4',
        label: '4. Accurately places serve into correct square focusing on direction',
        options: ratings,
        required: true,
        order: 4,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-5',
        label: '5. Able to sustain a dink rally with players of equal ability',
        options: ratings,
        required: true,
        order: 5,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-6',
        label: '6. Able to volley with some direction',
        options: ratings,
        required: true,
        order: 6,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-7',
        label: '7. Understands the fundamentals of the game',
        options: ratings,
        required: true,
        order: 7,
      }),
      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-8',
        label: '8. Understands proper court positioning',
        options: ratings,
        required: true,
        order: 8,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-9',
        label: '9. Able to accurately keep score throughout the game',
        options: ratings,
        required: true,
        order: 9,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-10',
        label: '10. Has good mobility moving in a safe and balanced manner',
        options: ratings,
        required: true,
        order: 10,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-11',
        label: '11. Has good quickness',
        options: ratings,
        required: true,
        order: 11,
      }),

      new FormField<string>({
        controlType: 'dropdown',
        key: 'skill25-12',
        label: '12. Has good hand-eye coordination',
        options: ratings,
        required: true,
        order: 12,
      }),
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
