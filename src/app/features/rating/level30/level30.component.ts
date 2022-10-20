import { Component, OnInit } from '@angular/core';
import { FormfieldLevel30Service } from '../../../services/formfield-level30.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level30',
  templateUrl: './level30.component.html',
  styleUrls: ['./level30.component.css'],
})
export class Level30Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(serviceFormFields: FormfieldLevel30Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
