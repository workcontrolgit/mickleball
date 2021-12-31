import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillratingRoutingModule } from './skillrating-routing.module';
import { SkillratingComponent } from './skillrating.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    SkillratingComponent, DashboardComponent
  ],
  imports: [
    CommonModule,
    SkillratingRoutingModule
  ]
})
export class SkillratingModule { }
