import { Component, OnInit } from '@angular/core';
import { FormfieldLevel25Service } from '../../../services/formfield-level25.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level25',
  templateUrl: './level25.component.html',
  styleUrls: ['./level25.component.css'],
})
export class Level25Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  //model = {};
  model = { level: '2.5' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(serviceFormFields: FormfieldLevel25Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
