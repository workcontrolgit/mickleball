import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { FormField } from '@shared/models/form-field';
import { Constants } from '@app/config/constants';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ValidationErrors, FormControl } from '@angular/forms';

export function EmailValidator(control: FormControl | any): ValidationErrors | null {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    control.value
  )
    ? null
    : { email: true };
}
@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel20Service {
  fields: FormlyFieldConfig[];
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

  getFields() {
    var skillRatings = this.constants.SkillRatings;
    this.fields = [
      {
        className: 'section-label',
        template: '<div class="alert alert-warning"><h4>Section 1 - Player Information</h4></div>',
      },
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Enter name',
          required: true,
        },
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter email',
          required: true,
        },
        validators: {
          validation: [EmailValidator],
        },
      },
      {
        key: 'assessmentDate',
        type: 'input',
        templateOptions: {
          label: 'Assessment Date',
          placeholder: 'Enter date',
          required: true,
          type: 'date',
        },
      },
      {
        className: 'section-label',
        template: '<div class="alert alert-success"><h4>Section 2 - Skill Rating</h4></div>',
      },
      {
        key: 'skill20-1',
        type: 'select',
        props: {
          label: '1. Minimal understanding of the basic rules of the game i.e. 2 bounce rule',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-2',
        type: 'select',
        props: {
          label: '2. Knows how to keep score',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-3',
        type: 'select',
        props: {
          label: '3. Demonstrates a forehand',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-4',
        type: 'select',
        props: {
          label: '4. Demonstrates a backhand',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-5',
        type: 'select',
        props: {
          label: '5. Demonstrates a volley',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-6',
        type: 'select',
        props: {
          label: '6. Accurately places serve into the correct square',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-7',
        type: 'select',
        props: {
          label: '7. Knows where to stand when serving and returning serve',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-8',
        type: 'select',
        props: {
          label: '8. Has good mobility moving in a safe and balanced manner',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill20-9',
        type: 'select',
        props: {
          label: '9. Has good quickness',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },

      {
        key: 'skill20-10',
        type: 'select',
        props: {
          label: '10. Has good hand-eye coordination',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        className: 'section-label',
        template: '<div class="alert alert-info"><h4>Section 3 - Summary</h4></div>',
      },
      {
        key: 'Comments',
        type: 'textarea',
        props: {
          label: 'Comments',
          placeholder: 'Enter any notes pertaining to this assessment ',
          rows: 5,
        },
      },
      {
        key: 'terms',
        type: 'checkbox',
        templateOptions: {
          label: 'I hereby declare that the assessment is true and correct to the best of my knowledge.',
          description: 'Please accept our terms',
          required: true,
        },
      },
    ];
    return this.fields;
  }
}
