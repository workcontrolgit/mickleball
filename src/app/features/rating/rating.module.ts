import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, ValidationErrors, FormControl } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { NgbdModalComponent, NgbdModalContent } from '../../@shared/components/modal/modal-component';
import { DatePikerComponent } from '../../@shared/components/date-piker/date-piker.component';
import { DatePickerValueAccessor } from '../../@shared/components/date-piker/date-picker.directive';
import { FieldsetWrapper } from '../../@shared/wrappers/FiledsetWrapper.component';
import { LabelWrapper } from '../../@shared/wrappers/LabelWrapper.component';

// TODO move into service
export function EmailValidator(control: FormControl | any): ValidationErrors | null {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    control.value
  )
    ? null
    : { email: true };
}
export function EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid email address`;
}

import { NgxPrintElementModule } from 'ngx-print-element';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RatingComponent,
    DashboardComponent,
    FormComponent,
    ReportcardComponent,
    EvaluationComponent,
    NgbdModalComponent,
    NgbdModalContent,
    DatePikerComponent,
    DatePickerValueAccessor,
    FieldsetWrapper,
    LabelWrapper,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: 'date', component: DatePikerComponent, wrappers: ['label', 'fieldset'] }],
      wrappers: [
        { name: 'label', component: LabelWrapper },
        { name: 'fieldset', component: FieldsetWrapper },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: EmailValidatorMessage },
      ],
      validators: [{ name: 'email', validation: EmailValidator }],
    }),
    FormsModule,
    NgxPrintElementModule,
    FormlyBootstrapModule, // must be imported as the last module as it contains the fallback route
    RatingRoutingModule,
  ],
  providers: [],
})
export class RatingModule {}
