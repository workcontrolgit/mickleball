// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class Constants {
  public readonly Api_Endpoint: string = environment.Api_Endpoint;
  public readonly Api_Mock_Endpoint: string = environment.Api_Mock_Endpoint;
  public readonly Ratings: { key: string; value: string }[] = [
    { key: '0', value: 'Not observed or not able to execute' },
    { key: '1', value: 'Attempted but very poorly executed/needs work' },
    { key: '2', value: 'Good basic form, but needs work' },
    { key: '3', value: 'Solid, consistent performance' },
  ];
  public readonly SkillRatings: { label: string; value: string }[] = [
    { value: '0', label: 'Not observed or not able to execute' },
    { value: '1', label: 'Attempted but very poorly executed/needs work' },
    { value: '2', label: 'Good basic form, but needs work' },
    { value: '3', label: 'Solid, consistent performance' },
  ];
}
