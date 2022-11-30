import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-date-piker',
  templateUrl: './date-piker.component.html',
  styleUrls: ['./date-piker.component.css'],
})
export class DatePikerComponent extends FieldType {}
