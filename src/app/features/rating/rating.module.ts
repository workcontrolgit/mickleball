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
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';

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
    DynamicFormComponent,
    DynamicFormInputComponent,
  ],
  imports: [CommonModule, NgbModule, ReactiveFormsModule, RatingRoutingModule],
})
export class RatingModule {}
