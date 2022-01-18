import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Level35Component } from './level35/level35.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RatingComponent, DashboardComponent, Level35Component
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    RatingRoutingModule
  ]
})
export class RatingModule { }
