import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating.component';
import { Level35Component } from './level35/level35.component';
import { Level40Component } from './level40/level40.component';
import { Level45Component } from './level45/level45.component';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Ratings') },
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
    data: { title: marker('Skill Assessment for 4.0 Players') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingRoutingModule {}
