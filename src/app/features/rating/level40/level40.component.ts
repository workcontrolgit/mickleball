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
  //model = {};
  model = { level: '4.0' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  public show: boolean = false;
  public buttonName: any = 'View Report Card';

  constructor(serviceFormFields: FormfieldLevel40Service, private router: Router) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {
    // this.model = {
    //   level: '4.0',
    //   playername: 'Fuji Nguyen',
    //   playeremail: 'fuji.nguyen@workcontrol.com',
    //   assessmentDate: '2022-10-24',
    //   'skillcode40-1': 'D',
    //   'skillcode40-2': 'A',
    //   'skillcode40-3': 'A',
    //   'skillcode40-4': 'A',
    //   'skillcode40-5': 'A',
    //   'skillcode40-6': 'A',
    //   'skillcode40-7': 'A',
    //   'skillcode40-8': 'A',
    //   'skillcode40-9': 'A',
    //   'skillcode40-10': 'A',
    //   'skillcode40-11': 'A',
    //   'skillcode40-12': 'D',
    //   'skillcode40-13': 'A',
    //   'skillcode40-14': 'B',
    //   'skillcode40-15': 'A',
    //   'skillcode40-16': 'A',
    //   'skillcode40-17': 'A',
    //   'skillcode40-18': 'A',
    //   'skillcode40-19': 'B',
    //   'skillcode40-20': 'A',
    //   'skillcode40-21': 'A',
    //   'skillcode40-22': 'C',
    //   evaluatorname: 'Emily Nguyen',
    //   evaluatoremail: 'emily@gmail.com',
    //   Notes: 'Lefty user',
    //   terms: true,
    // };
  }

  submit() {
    // alert(JSON.stringify(this.model));
  }

  toggle() {
    this.show = !this.show;
  }
}
