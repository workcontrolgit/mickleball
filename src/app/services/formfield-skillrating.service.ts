import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormfieldControlService } from '@app/services/formfield-control.service';
import { environment } from '@env/environment';

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

  getFormFields(skillLevel: string) {
    // var filterLevel = '4.0';
    var skillcodeList = this.formfieldControlService.LstSkillcode(skillLevel);

    // var instruction2 = '<ngx-teleport-outlet name="toolbar"></ngx-teleport-outlet>'
    var instructions: string;

    switch (skillLevel) {
      case '2.0': {
        instructions = environment.Evaluation_Instruction.Level_20;
        break;
      }
      case '2.5': {
        instructions = environment.Evaluation_Instruction.Level_25;
        break;
      }
      case '3.0': {
        instructions = environment.Evaluation_Instruction.Level_30;
        break;
      }
      case '3.5': {
        instructions = environment.Evaluation_Instruction.Level_35;
        break;
      }
      case '4.0': {
        instructions = environment.Evaluation_Instruction.Level_40;
        break;
      }
      case '4.5': {
        instructions = environment.Evaluation_Instruction.Level_45;
        break;
      }
      case '5.0': {
        instructions = environment.Evaluation_Instruction.Level_50;
        break;
      }
      default: {
        instructions = 'undefined';
        break;
      }
    }

    this.ratingFields = [
      {
        key: 'level',
      },

      {
        className: 'section-label',
        template: instructions,
        //template: instruction2,
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
