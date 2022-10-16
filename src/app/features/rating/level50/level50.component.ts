import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../@shared/models/form-field';
import { FormfieldGeneralService } from '../../../services/formfield-general.service';
import { FormfieldLevel50Service } from '../../../services/formfield-level50.service';
import { FormfieldSignatureService } from '../../../services/formfield-signature.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level50',
  templateUrl: './level50.component.html',
  styleUrls: ['./level50.component.css'],
})
export class Level50Component implements OnInit {
  formGeneralFields: Observable<FormField<any>[]>;
  formSignatureFields: Observable<FormField<any>[]>;
  formSkillAssessmentFields: Observable<FormField<any>[]>;

  constructor(
    serviceGeneral: FormfieldGeneralService,
    serviceSignature: FormfieldSignatureService,
    serviceSkillAssessment: FormfieldLevel50Service
  ) {
    this.formGeneralFields = serviceGeneral.getFormFields();
    this.formSignatureFields = serviceSignature.getFormFields();
    this.formSkillAssessmentFields = serviceSkillAssessment.getFormFields();
  }

  ngOnInit() {}
}
