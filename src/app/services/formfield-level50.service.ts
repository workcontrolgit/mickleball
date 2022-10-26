import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel50Service {
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
          '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 5.0 should ALSO possess all 4.5 skills.</span></div>',
      },
      {
        key: '50-1',
        type: 'select',
        props: {
          label: '50-1 Has developed a very high level of variety, depth and pace of serves',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-2',
        type: 'select',
        props: {
          label: '50-2 Serves with power accuracy and depth and can vary speed and spin of serve',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-3',
        type: 'select',
        props: {
          label:
            '50-3 Has a high level of accuracy and dependable forehand groundstroke using pace and depth to generate opponent’s error to set up next shot',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-4',
        type: 'select',
        props: {
          label:
            '50-4 Has a high level of accuracy directing the ball with the backhand, varying depth and pace with control to set up offensive situations',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-5',
        type: 'select',
        props: {
          label: '50-5 Has mastered the dink with shot placement and ability to move opponents',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-6',
        type: 'select',
        props: {
          label: '50-6 Exhibits patience during rallies with ability to create opportunities to attack using dinks',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-7',
        type: 'select',
        props: {
          label: '50-7 Increased ability to change the pace of dinks strategically',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-8',
        type: 'select',
        props: {
          label:
            '50-8 Mastered the 3rd shot choices and strategies Able to drop and drive ball from both the forehand and backhand side with high level consistency',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-9',
        type: 'select',
        props: {
          label: '50-9 Able to intentionally and consistently place the 3rd shot drop',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-10',
        type: 'select',
        props: {
          label: '50-10 Able to block hard volleys directed at them and consistently drop them in NVZ',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-11',
        type: 'select',
        props: {
          label: '50-11 Places overheads with ease for winners',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-12',
        type: 'select',
        props: {
          label: '50-12 Able to volley shots toward opponent’s feet consistently',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-13',
        type: 'select',
        props: {
          label:
            '50-13 Comfortable with swinging volley in both initiating and ability to attack back or neutralize return',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-14',
        type: 'select',
        props: {
          label: '50-14 Efficient footwork and effective use of weight transfer for improved quickness on court',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-15',
        type: 'select',
        props: {
          label:
            '50-15 Easily and quickly adjusts style of play and game plan according to the opponent’s strengths and weaknesses and court position',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-16',
        type: 'select',
        props: {
          label: '50-16 Rarely makes unforced errors',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: '50-17',
        type: 'select',
        props: {
          label: '50-17 Has good mobility, quickness, and hand-eye coordination',
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
