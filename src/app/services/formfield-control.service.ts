import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { FormField } from '../@shared/models/form-field';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach((input) => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case 'email':
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] =
        validator.length > 0 ? new FormControl(input.value || '', validator) : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  public readonly SkillRatings: { label: string; value: string }[] = [
    { value: '0', label: 'Not observed or not able to execute' },
    { value: '1', label: 'Attempted but very poorly executed/needs work' },
    { value: '2', label: 'Good basic form, but needs work' },
    { value: '3', label: 'Solid, consistent performance' },
  ];

  public readonly GeneralFields: FormlyFieldConfig[] = [
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
        validation: [this.EmailValidator],
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
  ];

  public readonly SummaryFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="alert alert-info"><h4>Section 3 - Summary</h4></div>',
    },
    {
      key: 'Comments',
      type: 'textarea',
      props: {
        label: 'Comments',
        placeholder: 'Enter any notes about the assessment here',
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

  EmailValidator(control: FormControl | any): ValidationErrors | null {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      control.value
    )
      ? null
      : { email: true };
  }
}
