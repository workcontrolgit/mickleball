import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../@shared/models/form-field';
import { FormfieldGeneralService } from '../../../services/formfield-general.service';
import { FormfieldLevel20Service } from '../../../services/formfield-level20.service';
import { FormfieldSignatureService } from '../../../services/formfield-signature.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level20',
  templateUrl: './level20.component.html',
  styleUrls: ['./level20.component.css'],
})
export class Level20Component implements OnInit {
  formGeneralFields: Observable<FormField<any>[]>;
  formSignatureFields: Observable<FormField<any>[]>;
  formSkillAssessmentFields: Observable<FormField<any>[]>;

  constructor(
    serviceGeneral: FormfieldGeneralService,
    serviceSignature: FormfieldSignatureService,
    serviceSkillAssessment: FormfieldLevel20Service
  ) {
    this.formGeneralFields = serviceGeneral.getFormFields();
    this.formSignatureFields = serviceSignature.getFormFields();
    this.formSkillAssessmentFields = serviceSkillAssessment.getFormFields();
  }

  ngOnInit() {}
}
