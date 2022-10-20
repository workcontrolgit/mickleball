import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldLevel40Service {
  generalFields: FormlyFieldConfig[];
  ratingFields: FormlyFieldConfig[];
  summaryFields: FormlyFieldConfig[];
  fields: FormlyFieldConfig[];
  constructor(private formfieldControlService: FormfieldControlService) {}

  getFormFields() {
    var skillRatings = this.formfieldControlService.SkillRatings;

    this.generalFields = this.formfieldControlService.GeneralFields;

    this.summaryFields = this.formfieldControlService.SummaryFields;

    this.ratingFields = [
      {
        className: 'section-label',
        template:
          '<div class="alert alert-success"><h4>Section 2 - Skill Rating</h4><strong>4.0 Skill Level should ALSO possess all 3.5 Skills</strong></div>',
      },
      {
        key: 'skill40-1',
        type: 'select',
        props: {
          label: '1. Consistently hits forehand with depth and control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-2',
        type: 'select',
        props: {
          label: '2. Consistently hits backhand with depth and control',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-3',
        type: 'select',
        props: {
          label: '3. Consistently gets serve in with varying depth and speed',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-4',
        type: 'select',
        props: {
          label: '4. Consistently gets return of serve in with varying depth and speed',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-5',
        type: 'select',
        props: {
          label: '5. Consistent and dependable overheads (directional control, depth and placement)',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-6',
        type: 'select',
        props: {
          label: '6. Accurate in placing lobs',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-7',
        type: 'select',
        props: {
          label: '7. Able to sustain dink rally with control, height and depth of shot',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-8',
        type: 'select',
        props: {
          label: '8. Understands which balls are attackable and those that are not in a dink rally',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-9',
        type: 'select',
        props: {
          label: '9. Sustains a dink exchange with patience at the net to elicit a “put away” shot',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-10',
        type: 'select',
        props: {
          label: '10. Consistently executes 3rd shot drop from the baseline to approach the net',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-11',
        type: 'select',
        props: {
          label: '11. Able to change soft shots to power shots to create an advantage',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-12',
        type: 'select',
        props: {
          label: '12. Able to volley a variety of shots at varying speeds',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-13',
        type: 'select',
        props: {
          label: '13. Able to block and return fast, hard volleys',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-14',
        type: 'select',
        props: {
          label: '14. Able to control NVZ (non-volley zone) keeping their opponents back',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-15',
        type: 'select',
        props: {
          label: '15. Aware of partners position on the court and moves as a team',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-16',
        type: 'select',
        props: {
          label: '16. Solid understanding of stacking and when and how it can be used effectively',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-17',
        type: 'select',
        props: {
          label: '17. Demonstrates ability to change position in an offensive manner (switching)',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-18',
        type: 'select',
        props: {
          label: '18. Demonstrates a broad knowledge of the rules of the game',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-19',
        type: 'select',
        props: {
          label: '19. Has a moderate number of unforced errors per game',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-20',
        type: 'select',
        props: {
          label: '20. Can identify opponents’ weaknesses and formulate plan to attack weaknesses',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-21',
        type: 'select',
        props: {
          label: '21. Plays competitively in tournaments',
          options: skillRatings,
          required: true,
          placeholder: 'Select from list',
        },
      },
      {
        key: 'skill40-22',
        type: 'select',
        props: {
          label: '22. Has good mobility, quickness, and hand-eye coordination',
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
