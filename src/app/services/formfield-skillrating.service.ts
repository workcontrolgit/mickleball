import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Injectable({
  providedIn: 'root',
})
export class FormfieldSkillRatingService {
  generalFields: FormlyFieldConfig[];
  ratingFields: FormlyFieldConfig[];
  summaryFields: FormlyFieldConfig[];
  fields: FormlyFieldConfig[];
  selectRatingPlaceholder: string;
  gradeLetters: { label: string; value: string }[];

  constructor(private formfieldControlService: FormfieldControlService) {
    this.gradeLetters = this.formfieldControlService.getGradeLetters();
    this.generalFields = this.formfieldControlService.GeneralFields;
    this.summaryFields = this.formfieldControlService.SummaryFields;
    this.selectRatingPlaceholder = this.formfieldControlService.SelectRatingPlaceholder;
  }

  getFormFields(ratingLevel: string, instruction: string) {
    // var filterLevel = '4.0';
    var skillcodeList = this.formfieldControlService.LstSkillcode(ratingLevel);

    this.ratingFields = [
      {
        key: 'level',
      },

      {
        className: 'section-label',
        template: instruction,
      },
    ];

    for (let i = 0; i < skillcodeList.length; i++) {
      this.ratingFields.push({
        key: skillcodeList[i].skillcode,
        type: 'radio',
        props: {
          label: skillcodeList[i].skillcode + ' ' + skillcodeList[i].description,
          options: this.gradeLetters,
          required: true,
          placeholder: this.selectRatingPlaceholder,
        },
      });
    }

    // combine three section 1, 2 and 3
    this.fields = this.generalFields.concat(this.ratingFields).concat(this.summaryFields);

    return this.fields;
  }
}
