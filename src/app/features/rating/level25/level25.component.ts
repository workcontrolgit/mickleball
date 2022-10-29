import { Component, OnInit } from '@angular/core';
import { FormfieldLevel25Service } from '../../../services/formfield-level25.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal-component';
@Component({
  selector: 'app-level25',
  templateUrl: './level25.component.html',
  styleUrls: ['./level25.component.css'],
})
export class Level25Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '2.5';

  model: any;
  modelDebug = {
    level: '2.5',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-26',
    '25-1': 'A',
    '25-2': 'B',
    '25-3': 'C',
    '25-4': 'D',
    '25-5': 'A',
    '25-6': 'A',
    '25-7': 'A',
    '25-8': 'A',
    '25-9': 'A',
    '25-10': 'A',
    '25-11': 'A',
    '25-12': 'A',
    evaluatorname: 'Chandra',
    evaluatoremail: 'fuji.nguyen@workcontrol.com',
    Notes: 'Lefty user',
    terms: true,
  };
  modelInit = { level: '2.5' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  show: boolean = false;
  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel25Service, private modalService: NgbModal) {
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
    if (this.form.valid) {
      this.show = !this.show;
    } else {
      this.open();
    }
  }

  toggle() {
    this.show = !this.show;
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}
