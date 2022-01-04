import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillratingRoutingModule } from './skillrating-routing.module';
import { SkillratingComponent } from './skillrating.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Level35Component } from './level35/level35.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SkillratingComponent, DashboardComponent, Level35Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkillratingRoutingModule
  ]
})
export class SkillratingModule { }
