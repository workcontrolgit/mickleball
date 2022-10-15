import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../@shared/models/form-field';
import { FormfieldControlService } from '../../../services/formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formGeneralFields: FormField<string>[] = [];
  @Input() formSignatureFields: FormField<string>[] = [];
  @Input() formSkillAssessmentFields: FormField<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private formfieldService: FormfieldControlService) {}

  ngOnInit(): void {
    var formFields = this.formSkillAssessmentFields.concat(this.formGeneralFields);
    // this.form = this.formfieldService.toFormGroup(this.formSkillAssessmentFields);
    // this.form = this.formfieldService.toFormGroup(this.formGeneralFields);
    this.form = this.formfieldService.toFormGroup(formFields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
