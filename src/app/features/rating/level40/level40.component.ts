import { Component, OnInit } from '@angular/core';
import { FormfieldLevel40Service } from '@app/services/formfield-level40.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-level40',
  templateUrl: './level40.component.html',
  styleUrls: ['./level40.component.css'],
})
export class Level40Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '4.0';

  model: any;

  modelDebug = {
    level: '4.0',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-24',
    '40-1': 'D',
    '40-2': 'A',
    '40-3': 'A',
    '40-4': 'A',
    '40-5': 'A',
    '40-6': 'A',
    '40-7': 'A',
    '40-8': 'A',
    '40-9': 'A',
    '40-10': 'A',
    '40-11': 'A',
    '40-12': 'D',
    '40-13': 'A',
    '40-14': 'B',
    '40-15': 'A',
    '40-16': 'A',
    '40-17': 'A',
    '40-18': 'A',
    '40-19': 'B',
    '40-20': 'A',
    '40-21': 'A',
    '40-22': 'C',
    evaluatorname: 'Emily Nguyen',
    evaluatoremail: 'emily@gmail.com',
    Notes: 'Lefty user',
    terms: true,
  };
  modelInit = { level: '4.0' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  show: boolean = false;
  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel40Service, private router: Router) {
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
    // alert(JSON.stringify(this.model));
  }

  toggle() {
    this.show = !this.show;
  }
}
