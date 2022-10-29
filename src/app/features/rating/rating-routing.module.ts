import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating.component';
import { Level20Component } from './level20/level20.component';
import { Level25Component } from './level25/level25.component';
import { Level30Component } from './level30/level30.component';
import { Level35Component } from './level35/level35.component';
import { Level40Component } from './level40/level40.component';
import { Level45Component } from './level45/level45.component';
import { Level50Component } from './level50/level50.component';
import { ReportcardComponent } from './reportcard/reportcard.component';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { NgbdModalComponent } from './modal-component';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Ratings') },
  },
  {
    path: 'level20',
    component: Level20Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 2.0 Players') },
  },
  {
    path: 'level25',
    component: Level25Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 2.5 Players') },
  },
  {
    path: 'level30',
    component: Level30Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 3.0 Players') },
  },
  {
    path: 'level35',
    component: Level35Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 3.5 Players') },
  },
  {
    path: 'level40',
    component: Level40Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 4.0 Players') },
  },
  {
    path: 'level45',
    component: Level45Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 4.5 Players') },
  },
  {
    path: 'level50',
    component: Level50Component,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 5.0 Players') },
  },
  {
    path: 'reportcard',
    component: ReportcardComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment Report Card') },
  },
  {
    path: 'modal',
    component: NgbdModalComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment Report Card') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingRoutingModule {}
