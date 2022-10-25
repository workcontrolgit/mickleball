import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Level20Component } from './level20/level20.component';
import { Level25Component } from './level25/level25.component';
import { Level30Component } from './level30/level30.component';
import { Level35Component } from './level35/level35.component';
import { Level40Component } from './level40/level40.component';
import { Level45Component } from './level45/level45.component';
import { Level50Component } from './level50/level50.component';
import { ReportcardComponent } from './reportcard/reportcard.component';

import { ReactiveFormsModule, ValidationErrors, FormControl } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

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

@NgModule({
  declarations: [
    RatingComponent,
    DashboardComponent,
    Level20Component,
    Level25Component,
    Level30Component,
    Level35Component,
    Level40Component,
    Level45Component,
    Level50Component,
    ReportcardComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'email', message: EmailValidatorMessage },
      ],
      validators: [{ name: 'email', validation: EmailValidator }],
    }),
    NgxPrintElementModule,
    FormlyBootstrapModule, // must be imported as the last module as it contains the fallback route
    RatingRoutingModule,
  ],
})
export class RatingModule {}
