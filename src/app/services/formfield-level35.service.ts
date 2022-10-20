import { Injectable } from '@angular/core';
import { Constants } from '@app/config/constants';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel35Service {
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
          '<div class="alert alert-success"><h4>Section 2 - Skill Rating</h4><strong>3.5 Skill Level should ALSO possess all 3.0 Skills</strong></div>',
      },
      {
        key: 'skill35-1',
        type: 'select',
        props: {
          label: '1. Able to use a forehand with moderate level of shot control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-2',
        type: 'select',
        props: {
          label: '2. Able to use a backhand with moderate level of shot control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-3',
        type: 'select',
        props: {
          label: '3. Consistently gets serve in',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-4',
        type: 'select',
        props: {
          label: '4. Consistently gets return of serve in',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-5',
        type: 'select',
        props: {
          label: '5. Able to place serves deep in the court',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-6',
        type: 'select',
        props: {
          label: '6. Able to place return of serves deep into the court',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-7',
        type: 'select',
        props: {
          label: '7. Able to dink and sustains medium length rallies',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-8',
        type: 'select',
        props: {
          label: '8. Able to control height/depth of dink shot',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-9',
        type: 'select',
        props: {
          label: '9. Understands variation of pace of dink shot',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-10',
        type: 'select',
        props: {
          label: '10. Able to hit a 3rd shot drop to gain advantage to the net',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-11',
        type: 'select',
        props: {
          label: '11. Able to volley with medium paced shots with control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-12',
        type: 'select',
        props: {
          label: '12. Sustains a short volley session at the next with placement and control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-13',
        type: 'select',
        props: {
          label: '13. Moves quickly to NVZ (non-volley zone) when opportunity is there',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-14',
        type: 'select',
        props: {
          label: '14. Understands proper court position',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-15',
        type: 'select',
        props: {
          label: '15. Understands difference b/w hard game and soft game and knows when to use it',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-16',
        type: 'select',
        props: {
          label: '16. Basic knowledge of stacking and knows when to use it',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-17',
        type: 'select',
        props: {
          label: '17. Able to sustain short rallies',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill35-18',
        type: 'select',
        props: {
          label: '18. Has good mobility, quickness, and hand-eye coordination',
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
