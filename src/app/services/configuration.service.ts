import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AppConfiguration } from '@app/@shared/models/appConfiguration';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { RatingScale, ratingcodeAttributesMapping } from '@app/@shared/models/gradescale';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Logger } from '@core';

const log = new Logger('configuration.service');

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  // Get configuration from gist
  private gist =
    'https://gist.githubusercontent.com/RangerDanger94/028ecfd11f06c9714461f14c3f0c543b/raw/ff4dbb390cced0a5a522eeb095041fcfac8711b5/settings.json';

  private configSettings: RatingScale[];

  // Default configuration
  private _configuration: AppConfiguration = {
    appName: 'Default',
  };

  ratingcodes$: Observable<RatingScale[]>;

  public get configuration() {
    return this._configuration;
  }

  get settings() {
    return this.configSettings;
  }

  constructor(private httpClient: HttpClient, private googleSheetsDbService: GoogleSheetsDbService) {
    this.ratingcodes$ = this.googleSheetsDbService.get<RatingScale>(
      environment.ratingcodes.spreadsheetId,
      environment.ratingcodes.worksheetName,
      ratingcodeAttributesMapping
    );

    this.ratingcodes$.subscribe(
      //Assign resp to class-level model object.
      (ratingcodes: RatingScale[]) => {
        log.debug(ratingcodes);
      },
      (error) => {
        log.debug(error);
      }
    );
  }

  public load(): Promise<AppConfiguration> {
    return this.httpClient
      .get<AppConfiguration>(this.gist)
      .pipe(
        tap((response) => console.log('HTTP Response:', response)),
        tap((response) => (this._configuration = response))
      )
      .toPromise();
  }

  public load2(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ratingcodes$.subscribe((response: any) => {
        this.configSettings = response;
        resolve(true);
      });
    });
  }
}
