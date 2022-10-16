import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../@shared/models/form-field';
import { FormfieldGeneralService } from '../../../services/formfield-general.service';
import { FormfieldLevel45Service } from '../../../services/formfield-level45.service';
import { FormfieldSignatureService } from '../../../services/formfield-signature.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level45',
  templateUrl: './level45.component.html',
  styleUrls: ['./level45.component.css'],
})
export class Level45Component implements OnInit {
  formGeneralFields: Observable<FormField<any>[]>;
  formSignatureFields: Observable<FormField<any>[]>;
  formSkillAssessmentFields: Observable<FormField<any>[]>;

  constructor(
    serviceGeneral: FormfieldGeneralService,
    serviceSignature: FormfieldSignatureService,
    serviceSkillAssessment: FormfieldLevel45Service
  ) {
    this.formGeneralFields = serviceGeneral.getFormFields();
    this.formSignatureFields = serviceSignature.getFormFields();
    this.formSkillAssessmentFields = serviceSkillAssessment.getFormFields();
  }

  ngOnInit() {}
}
