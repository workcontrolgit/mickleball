import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel45Service {
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
          '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 4.5 should ALSO possess all 4.0 skills.</span></div>',
      },
      {
        key: 'skillcode45-1',
        type: 'select',
        props: {
          label: '45-1 Consistently controls and places serves and return of serves',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-2',
        type: 'select',
        props: {
          label: '45-2 Serves with power accuracy and depth and can vary speed and spin of serve',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-3',
        type: 'select',
        props: {
          label:
            '45-3 Consistent and dependable forehand groundstroke using pace and depth to generate opponent’s error to set up next shot',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-4',
        type: 'select',
        props: {
          label: '45-4 Can effectively/consistently direct the ball with the backhand, varying depth and pace',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-5',
        type: 'select',
        props: {
          label:
            '45-5 Ability to place dink with high success at changing shot types while playing both consistently and with offensive intent',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-6',
        type: 'select',
        props: {
          label: '45-6 Recognizes and attempts to hit attackable dinks',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-7',
        type: 'select',
        props: {
          label: '45-7 Consistently executes effective 3rd shot strategies that are not easily returned',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-8',
        type: 'select',
        props: {
          label: '45-8 Able to intentionally and consistently place the 3rd shot drop',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-9',
        type: 'select',
        props: {
          label: '45-9 Able to block hard volleys directed at them and consistently drop them in NVZ',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-10',
        type: 'select',
        props: {
          label: '45-10 Comfortable hitting swinging volleys and hits overhead shots consistently as putaways',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-11',
        type: 'select',
        props: {
          label: '45-11 Poaches effectively',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-12',
        type: 'select',
        props: {
          label: '45-12 Has effective lobs and creates coverage gaps and hits to these gaps consistently',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-13',
        type: 'select',
        props: {
          label: '45-13 Has good footwork and moves laterally, forward and backward well',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-14',
        type: 'select',
        props: {
          label: '45-14 Very comfortable playing at the NVZ',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-15',
        type: 'select',
        props: {
          label: '45-15 Communicates and moves well with partner – easily “stacks” court positions',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-16',
        type: 'select',
        props: {
          label:
            '45-16 Understands strategy and can adjusts style of play and game plan according to the opponent’s strengths and weaknesses and court position',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-17',
        type: 'select',
        props: {
          label: '45-17 Limited number of unforced errors',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-18',
        type: 'select',
        props: {
          label: '45-18 Has good mobility and quickness',
          options: this.skillRatings,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      },
      {
        key: 'skillcode45-19',
        type: 'select',
        props: {
          label: '45-19 Has good hand-eye coordination',
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
