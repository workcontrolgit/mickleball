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

  constructor(private formfieldControlService: FormfieldControlService) {
    //this.skillRatings = this.formfieldControlService.SkillRatings;
    this.skillRatings = this.formfieldControlService.getGradeLetters();
    this.generalFields = this.formfieldControlService.GeneralFields;
    this.summaryFields = this.formfieldControlService.SummaryFields;
    this.selectRatingPlaceholder = this.formfieldControlService.SelectRatingPlaceholder;
  }

  getFormFields() {
    var filterLevel = '2.0';
    var skillcodeList = this.formfieldControlService.LstSkillcode(filterLevel);

    this.ratingFields = [
      {
        key: 'level',
      },

      {
        className: 'section-label',
        template:
          '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute</div></p></div>',
      },
    ];

    for (let i = 0; i < skillcodeList.length; i++) {
      this.ratingFields.push({
        key: skillcodeList[i].Skillcode,
        type: 'radio',
        templateOptions: {
          label: skillcodeList[i].Skillcode + ' ' + skillcodeList[i].Description,
          options: this.skillRatings,
          required: true,
          type: 'radio',
          placeholder: this.selectRatingPlaceholder,
        },
      });
    }

    this.fields = this.generalFields.concat(this.ratingFields).concat(this.summaryFields);

    return this.fields;
  }
}
