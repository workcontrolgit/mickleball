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

import { ConfigurationService } from './services/configuration.service';

export function initConfig(configService: ConfigurationService) {
  return () => configService.load2();
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
      deps: [ConfigurationService],
      multi: true,
      useFactory: initConfig,
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
