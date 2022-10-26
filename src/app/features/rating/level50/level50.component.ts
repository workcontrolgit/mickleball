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
  ratinglevel = '5.0';
  model: any;
  modelDebug = {
    level: '5.0',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-26',
    '50-1': 'A',
    '50-2': 'B',
    '50-3': 'C',
    '50-4': 'D',
    '50-5': 'A',
    '50-6': 'A',
    '50-7': 'A',
    '50-8': 'A',
    '50-9': 'A',
    '50-10': 'A',
    '50-11': 'A',
    '50-12': 'D',
    '50-14': 'A',
    '50-15': 'B',
    '50-16': 'B',
    '50-17': 'C',
    evaluatorname: 'Hieu Thi Nguyen',
    evaluatoremail: 'fuji.nguyen@workcontrol.com',
    Notes: 'Lefty user',
    terms: true,
    '50-13': 'A',
  };
  modelInit = { level: '5.0' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  show: boolean = false;

  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel50Service) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {
    if (this.debug) {
      this.model = this.modelDebug;
    } else {
      this.model = this.modelInit;
    }
  }

  submit() {
    //alert(JSON.stringify(this.model));
  }

  toggle() {
    this.show = !this.show;
  }
}
