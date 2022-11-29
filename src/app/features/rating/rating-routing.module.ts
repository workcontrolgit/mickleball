import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating.component';
import { FormComponent } from './form/form.component';
import { ReportcardComponent } from './reportcard/reportcard.component';

import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { NgbdModalComponent } from './components/modal/modal-component';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Ratings') },
  },
  {
    path: 'level20',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 2.0 Players'), skillLevel: '2.0' },
  },
  {
    path: 'level25',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 2.5 Players'), skillLevel: '2.5' },
  },
  {
    path: 'level30',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 3.0 Players'), skillLevel: '3.0' },
  },
  {
    path: 'level35',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 3.5 Players'), skillLevel: '3.5' },
  },
  {
    path: 'level40',
    component: FormComponent,
    canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 4.0 Players'), skillLevel: '4.0' },
  },
  {
    path: 'level45',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 4.5 Players'), skillLevel: '4.5' },
  },
  {
    path: 'level50',
    component: FormComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Assessment for 5.0 Players'), skillLevel: '5.0' },
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
