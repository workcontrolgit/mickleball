import { Injectable } from '@angular/core';
import { Constants } from '@app/config/constants';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel30Service {
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
        template:
          '<div class="alert alert-success"><h4>Section 2 - Skill Rating</h4><strong>3.0 Skill Level should ALSO possess all 2.5 Skills</strong></div>',
      },
      {
        key: 'skill30-1',
        type: 'select',
        props: {
          label: '1. Able to hit a medium paced forehand with direction and consistency',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-2',
        type: 'select',
        props: {
          label: '2. Able to hit a medium paced backhand with direction and consistency',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-3',
        type: 'select',
        props: {
          label: '3. Able to hit a medium paced serve with depth, direction and consistency',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-4',
        type: 'select',
        props: {
          label: '4. Able to consistently sustain a dink rally with control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-5',
        type: 'select',
        props: {
          label: '5. Able to hit a medium paced 3rd shot with direction',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-6',
        type: 'select',
        props: {
          label: '6. Able to hit a medium paced volley with direction and consistency',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-7',
        type: 'select',
        props: {
          label: '7. Understands the fundamentals of the game',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-8',
        type: 'select',
        props: {
          label: '8. Understands proper court positioning',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-9',
        type: 'select',
        props: {
          label: '9. Understands rules and can keep score',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-10',
        type: 'select',
        props: {
          label: '10. Has good mobility, quickness, and hand-eye coordination',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill30-11',
        type: 'select',
        props: {
          label: '11. Has started playing in tournaments',
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
