import { Injectable } from '@angular/core';
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
  selectRatingPlaceholder: string;
  skillRatings: { label: string; value: string }[];

  constructor(private formfieldControlService: FormfieldControlService) {}

  getFormFields() {
    this.skillRatings = this.formfieldControlService.SkillRatings;

    this.generalFields = this.formfieldControlService.GeneralFields;

    this.summaryFields = this.formfieldControlService.SummaryFields;

    this.selectRatingPlaceholder = this.formfieldControlService.SelectRatingPlaceholder;

    this.ratingFields = [
      {
        className: 'section-label',
        template:
          '<div class="alert alert-success"><h4>Section 2 - Skill Rating</h4><strong>2.5 Skill Level should ALSO possess all 2.0 Skills</strong></div>',
      },

      {
        key: 'skill25-1',
        type: 'select',
        templateOptions: {
          label: '1. Knows the basic rules of the game including the 2 bounce rule',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-2',
        type: 'select',
        props: {
          label: '2. Able to hit a forehand with direction',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-3',
        type: 'select',
        props: {
          label: '3. Able to hit a backhand with direction',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-4',
        type: 'select',
        props: {
          label: '4. Accurately places serve into correct square focusing on direction',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-5',
        type: 'select',
        props: {
          label: '5. Able to sustain a dink rally with players of equal ability',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-6',
        type: 'select',
        props: {
          label: '6. Able to volley with some direction',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-7',
        type: 'select',
        props: {
          label: '7. Understands the fundamentals of the game',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-8',
        type: 'select',
        props: {
          label: '8. Understands proper court positioning',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-9',
        type: 'select',
        props: {
          label: '9. Able to accurately keep score throughout the game',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-10',
        type: 'select',
        props: {
          label: '10. Has good mobility moving in a safe and balanced manner',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-11',
        type: 'select',
        props: {
          label: '11. Has good quickness',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skill25-12',
        type: 'select',
        props: {
          label: '12. Has good hand-eye coordination',
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
