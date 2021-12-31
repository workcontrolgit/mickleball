import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ShouldLoginComponent } from './should-login.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'employee',
      loadChildren: () => import('./features/employee/employee.module').then((m) => m.EmployeeModule),
      //data: {role: 'Manager'},
    },
    {
      path: 'position',
      loadChildren: () => import('./features/position/position.module').then((m) => m.PositionModule),
      //data: {role: 'Manager'},
    },
    {
      path: 'admin',
      loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
      //data: {role: 'Manager'},
    },
    {
      path: 'manager',
      loadChildren: () => import('./features/manager/manager.module').then((m) => m.ManagerModule),
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
    {
      path: 'skillrating',
      loadChildren: () => import('./features/skillrating/skillrating.module').then((m) => m.SkillratingModule),
    },
  ]),

  { path: 'should-login', component: ShouldLoginComponent },
  // { path: 'skillrating', loadChildren: () => import('./features/skillrating/skillrating.module').then(m => m.SkillratingModule) },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
