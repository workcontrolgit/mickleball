import { Component, OnInit } from '@angular/core';
import { FormfieldLevel35Service } from '../../../services/formfield-level35.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-level35',
  templateUrl: './level35.component.html',
  styleUrls: ['./level35.component.css'],
})
export class Level35Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  //model = {};
  model = { level: '3.5' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  public show: boolean = false;

  constructor(serviceFormFields: FormfieldLevel35Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {}

  submit() {
    //alert(JSON.stringify(this.model));
  }

  toggle() {
    this.show = !this.show;
  }
}
