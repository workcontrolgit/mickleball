import { Component, OnInit } from '@angular/core';
import { FormfieldLevel40Service } from '../../../services/formfield-level40.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level40',
  templateUrl: './level40.component.html',
  styleUrls: ['./level40.component.css'],
})
export class Level40Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(serviceFormFields: FormfieldLevel40Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
