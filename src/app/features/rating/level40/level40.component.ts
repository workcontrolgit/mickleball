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
  //model = {"level": "4.0"};
  model = {};
  level = '4.0';
  showreportcard: boolean = true;

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  public show: boolean = true;
  public buttonName: any = 'Hide';

  constructor(serviceFormFields: FormfieldLevel40Service, private router: Router) {
    this.fields = serviceFormFields.getFormFields();
  }

  ngOnInit() {
    this.model = {
      level: '4.0',
      playername: 'Fuji Nguyen',
      playeremail: 'fuji.nguyen@workcontrol.com',
      assessmentDate: '2022-10-24',
      'skill-1': 'A',
      'skill40-2': 'A',
      'skill40-3': 'A',
      'skill40-4': 'A',
      'skill40-5': 'A',
      'skill40-6': 'A',
      'skill40-7': 'A',
      'skill40-8': 'A',
      'skill40-9': 'A',
      'skill40-10': 'A',
      'skill40-11': 'A',
      'skill40-12': 'D',
      'skill40-13': 'A',
      'skill40-14': 'B',
      'skill40-15': 'A',
      'skill40-16': 'A',
      'skill40-17': 'A',
      'skill40-18': 'A',
      'skill40-19': 'B',
      'skill40-20': 'A',
      'skill40-21': 'A',
      'skill40-22': 'C',
      evaluatorname: 'Emily Nguyen',
      evaluatoremail: 'emily@gmail.com',
      Notes: 'Lefty user',
      terms: true,
    };
  }

  submit() {
    // alert(JSON.stringify(this.model));
    this.showreportcard = false;
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.buttonName = 'Go Back';
    else this.buttonName = 'View Report Card';
  }
}
