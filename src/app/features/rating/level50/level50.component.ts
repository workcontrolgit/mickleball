import { Component, OnInit } from '@angular/core';
import { FormfieldLevel50Service } from '../../../services/formfield-level50.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level50',
  templateUrl: './level50.component.html',
  styleUrls: ['./level50.component.css'],
})
export class Level50Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  //model = {};
  model = { level: '5.0' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(serviceFormFields: FormfieldLevel50Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
