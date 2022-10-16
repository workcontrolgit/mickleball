import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../@shared/models/form-field';
import { FormfieldGeneralService } from '../../../services/formfield-general.service';
import { FormfieldLevel30Service } from '../../../services/formfield-level30.service';
import { FormfieldSignatureService } from '../../../services/formfield-signature.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level30',
  templateUrl: './level30.component.html',
  styleUrls: ['./level30.component.css'],
})
export class Level30Component implements OnInit {
  formGeneralFields: Observable<FormField<any>[]>;
  formSignatureFields: Observable<FormField<any>[]>;
  formSkillAssessmentFields: Observable<FormField<any>[]>;

  constructor(
    serviceGeneral: FormfieldGeneralService,
    serviceSignature: FormfieldSignatureService,
    serviceSkillAssessment: FormfieldLevel30Service
  ) {
    this.formGeneralFields = serviceGeneral.getFormFields();
    this.formSignatureFields = serviceSignature.getFormFields();
    this.formSkillAssessmentFields = serviceSkillAssessment.getFormFields();
  }

  ngOnInit() {}
}
