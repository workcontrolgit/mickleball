import { Injectable } from '@angular/core';
import { Constants } from '@app/config/constants';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel25Service {
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
          '<div class="alert alert-success"><h4>Section 2 - Skill Rating</h4><strong>2.5 Skill Level should ALSO possess all 2.0 Skills</strong></div>',
      },
      {
        key: 'skill25-1',
        type: 'select',
        props: {
          label: '1. Knows the basic rules of the game including the 2 bounce rule',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-2',
        type: 'select',
        props: {
          label: '2. Able to hit a forehand with direction',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-3',
        type: 'select',
        props: {
          label: '3. Able to hit a backhand with direction',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-4',
        type: 'select',
        props: {
          label: '4. Accurately places serve into correct square focusing on direction',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-5',
        type: 'select',
        props: {
          label: '5. Able to sustain a dink rally with players of equal ability',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-6',
        type: 'select',
        props: {
          label: '6. Able to volley with some direction',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-7',
        type: 'select',
        props: {
          label: '7. Understands the fundamentals of the game',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-8',
        type: 'select',
        props: {
          label: '8. Understands proper court positioning',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-9',
        type: 'select',
        props: {
          label: '9. Able to accurately keep score throughout the game',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-10',
        type: 'select',
        props: {
          label: '10. Has good mobility moving in a safe and balanced manner',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-11',
        type: 'select',
        props: {
          label: '11. Has good quickness',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill25-12',
        type: 'select',
        props: {
          label: '12. Has good hand-eye coordination',
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
