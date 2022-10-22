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

  ngOnInit() {
    //this.model = { "name": "Fuji Nguyen", "email": "fuji.nguyen@workcontrol.com", "assessmentDate": "2022-10-22", "skill40-1": "A", "skill40-2": "A", "skill40-3": "A", "skill40-4": "A", "skill40-5": "A", "skill40-6": "A", "skill40-7": "A", "skill40-8": "A", "skill40-9": "A", "skill40-10": "A", "skill40-11": "A", "skill40-12": "A", "skill40-13": "A", "skill40-14": "A", "skill40-15": "A", "skill40-16": "A", "skill40-17": "A", "skill40-18": "A", "skill40-19": "A", "skill40-20": "A", "skill40-21": "A", "skill40-22": "A", "Comments": "Self Eval", "terms": true };
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
