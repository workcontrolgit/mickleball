import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillratingComponent } from './skillrating.component';

const routes: Routes = [{ path: '', component: SkillratingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillratingRoutingModule { }
