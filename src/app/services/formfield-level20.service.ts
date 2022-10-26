import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel20Service {
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
        key: 'level',
      },
      {
        className: 'section-label',
        template:
          '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.</span></div>',
      },
      {
        key: '20-1',
        type: 'select',
        props: {
          label: '20-1 Minimal understanding of the basic rules of the game i.e 2 bounce rule',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-2',
        type: 'select',
        props: {
          label: '20-2 Knows how to keep score',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-3',
        type: 'select',
        props: {
          label: '20-3 Demonstrates a forehand',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-4',
        type: 'select',
        props: {
          label: '20-4 Demonstrates a backhand',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-5',
        type: 'select',
        props: {
          label: '20-5 Demonstrates a volley',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-6',
        type: 'select',
        props: {
          label: '20-6 Accurately places serve into the correct square',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-7',
        type: 'select',
        props: {
          label: '20-7 Knows where to stand when serving and returning serve',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-8',
        type: 'select',
        props: {
          label: '20-8 Has good mobility moving in a safe and balanced manner',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '20-9',
        type: 'select',
        props: {
          label: '20-9 Has good quickness',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },

      {
        key: '20-10',
        type: 'select',
        props: {
          label: '20-10 Has good hand-eye coordination',
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
