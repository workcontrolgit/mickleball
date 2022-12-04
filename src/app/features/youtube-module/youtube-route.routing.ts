import { Routes, RouterModule } from '@angular/router';
import { YoutubeModuleComponent } from './youtube-module.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: YoutubeModuleComponent,
    //canActivate: [AuthGuard],
    data: { title: marker('Skill Ratings') },
  },
];

export const YoutubeRouteRoutes = RouterModule.forChild(routes);
