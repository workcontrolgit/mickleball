import { Component, OnInit } from '@angular/core';
import { FormfieldLevel20Service } from '../../../services/formfield-level20.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level20',
  templateUrl: './level20.component.html',
  styleUrls: ['./level20.component.css'],
})
export class Level20Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(serviceFormFields: FormfieldLevel20Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
