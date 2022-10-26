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
  selectRatingPlaceholder: string;
  skillRatings: { label: string; value: string }[];

  constructor(private constants: Constants, private formfieldControlService: FormfieldControlService) {}

  getFormFields() {
    this.skillRatings = this.formfieldControlService.SkillRatings;

    this.generalFields = this.formfieldControlService.GeneralFields;

    this.summaryFields = this.formfieldControlService.SummaryFields;

    this.selectRatingPlaceholder = this.formfieldControlService.SelectRatingPlaceholder;

    this.ratingFields = [
      {
        key: 'level',
      },
      {
        className: 'section-label',
        template:
          '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><strong>3.5 Skill Level should ALSO possess all 3.0 Skills</strong></div>',
      },
      {
        key: 'skillcode35-1',
        type: 'select',
        props: {
          label: '35-1 Able to use a forehand with moderate level of shot control',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-2',
        type: 'select',
        props: {
          label: '35-2 Able to use a backhand with moderate level of shot control',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-3',
        type: 'select',
        props: {
          label: '35-3 Consistently gets serve in',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-4',
        type: 'select',
        props: {
          label: '35-4 Consistently gets return of serve in',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-5',
        type: 'select',
        props: {
          label: '35-5 Able to place serves deep in the court',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-6',
        type: 'select',
        props: {
          label: '35-6 Able to place return of serves deep into the court',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-7',
        type: 'select',
        props: {
          label: '35-7 Able to dink and sustains medium length rallies',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-8',
        type: 'select',
        props: {
          label: '35-8 Able to control height/depth of dink shot',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-9',
        type: 'select',
        props: {
          label: '35-9 Understands variation of pace of dink shot',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-10',
        type: 'select',
        props: {
          label: '35-10 Able to hit a 3rd shot drop to gain advantage to the net',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-11',
        type: 'select',
        props: {
          label: '35-11 Able to volley with medium paced shots with control',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-12',
        type: 'select',
        props: {
          label: '35-12 Sustains a short volley session at the next with placement and control',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-13',
        type: 'select',
        props: {
          label: '35-13 Moves quickly to NVZ (non-volley zone) when opportunity is there',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-14',
        type: 'select',
        props: {
          label: '35-14 Understands proper court position',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-15',
        type: 'select',
        props: {
          label: '35-15 Understands difference b/w hard game and soft game and knows when to use it',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-16',
        type: 'select',
        props: {
          label: '35-16 Basic knowledge of stacking and knows when to use it',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-17',
        type: 'select',
        props: {
          label: '35-17 Able to sustain short rallies',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode35-18',
        type: 'select',
        props: {
          label: '35-18 Has good mobility, quickness, and hand-eye coordination',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
    ];
    this.fields = this.generalFields.concat(this.ratingFields).concat(this.summaryFields);

    return this.fields;
  }
}
