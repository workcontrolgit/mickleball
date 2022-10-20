import { Component, OnInit } from '@angular/core';
import { FormfieldLevel45Service } from '../../../services/formfield-level45.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level45',
  templateUrl: './level45.component.html',
  styleUrls: ['./level45.component.css'],
})
export class Level45Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(serviceFormFields: FormfieldLevel45Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
