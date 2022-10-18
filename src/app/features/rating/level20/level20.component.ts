import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../@shared/models/form-field';
import { FormfieldGeneralService } from '../../../services/formfield-general.service';
import { FormfieldLevel20Service } from '../../../services/formfield-level20.service';
import { FormfieldSignatureService } from '../../../services/formfield-signature.service';
import { Observable } from 'rxjs';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-level20',
  templateUrl: './level20.component.html',
  styleUrls: ['./level20.component.css'],
})
export class Level20Component implements OnInit {
  formGeneralFields: Observable<FormField<any>[]>;
  formSignatureFields: Observable<FormField<any>[]>;
  formSkillAssessmentFields: Observable<FormField<any>[]>;
  // ngx formly
  form = new FormGroup({});
  model = {
    lastName: 'Smith',
    candy: 'baby_ruth',
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(
    serviceGeneral: FormfieldGeneralService,
    serviceSignature: FormfieldSignatureService,
    serviceSkillAssessment: FormfieldLevel20Service,
    private http: HttpClient
  ) {
    this.formGeneralFields = serviceGeneral.getFormFields();
    this.formSignatureFields = serviceSignature.getFormFields();
    this.formSkillAssessmentFields = serviceSkillAssessment.getFormFields();
    this.fields = serviceSkillAssessment.getFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
