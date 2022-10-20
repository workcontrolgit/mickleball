import { Injectable } from '@angular/core';
import { Constants } from '@app/config/constants';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ValidationErrors, FormControl } from '@angular/forms';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel20Service {
  generalFields: FormlyFieldConfig[];
  ratingFields: FormlyFieldConfig[];
  summaryFields: FormlyFieldConfig[];
  fields: FormlyFieldConfig[];
  constructor(private constants: Constants, private formfieldControlService: FormfieldControlService) {}

  getFormFields() {
    var skillRatings = this.formfieldControlService.SkillRatings;

    this.generalFields = this.formfieldControlService.GeneralFields;

    this.summaryFields = this.formfieldControlService.SummaryFields;

    this.ratingFields = [
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
    ];
    this.fields = this.generalFields.concat(this.ratingFields).concat(this.summaryFields);

    return this.fields;
  }
}
