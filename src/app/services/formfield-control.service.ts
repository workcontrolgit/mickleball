import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  public readonly SelectRatingPlaceholder: string = 'Select rating';

  public readonly SkillRatings: { label: string; value: string }[] = [
    { value: 'A', label: 'A - Solid, consistent performance' },
    { value: 'B', label: 'B - Good basic form, but needs work' },
    { value: 'C', label: 'C - Attempted but very poorly executed/needs work' },
    { value: 'D', label: 'D - Not observed or not able to execute' },
  ];

  public readonly GeneralFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="alert alert-warning"><h4>Section 1 - Player Information</h4></div>',
    },
    {
      key: 'playername',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter player name',
        required: true,
      },
    },
    {
      key: 'playeremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter player email',
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
      template: '<div class="alert alert-info"><h4>Section 3 - Evaluator Information</h4></div>',
    },
    {
      key: 'evaluatorname',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter evaluator name',
        required: true,
      },
    },
    {
      key: 'evaluatoremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter evaluator email',
        required: true,
      },
      validators: {
        validation: [this.EmailValidator],
      },
    },
    {
      key: 'Notes',
      type: 'textarea',
      props: {
        label: 'Assessment Notes',
        placeholder: 'enter any notes about the assessment here',
        rows: 5,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'I hereby declare that the assessment is true and correct to the best of my knowledge.',
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

  EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
    return `"${field?.formControl?.value}" is not a valid email address`;
  }
}
