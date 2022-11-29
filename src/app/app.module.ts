import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FallbackComponent } from './fallback.component';
import { ShouldLoginComponent } from './should-login.component';

import { NgHttpLoaderModule } from 'ng-http-loader';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { TableGradesService } from './services/table-grades.service';
import { TableSkillsService } from './services/table-skills.service';

export function initTableGrades(configService: TableGradesService) {
  return () => configService.load();
}

export function initTableSkills(configService: TableSkillsService) {
  return () => configService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    NgbModule,
    CoreModule.forRoot(),
    SharedModule,
    ShellModule,
    HomeModule,
    ReactiveFormsModule,
    Angulartics2Module.forRoot(),
    AppRoutingModule,
  ],
  declarations: [AppComponent, FallbackComponent, ShouldLoginComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [TableGradesService],
      multi: true,
      useFactory: initTableGrades,
    },
    {
      provide: APP_INITIALIZER,
      deps: [TableSkillsService],
      multi: true,
      useFactory: initTableSkills,
    },
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
