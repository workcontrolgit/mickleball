import { Component, OnInit } from '@angular/core';
import { FormfieldLevel20Service } from '../../../services/formfield-level20.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal-component';

@Component({
  selector: 'app-level20',
  templateUrl: './level20.component.html',
  styleUrls: ['./level20.component.css'],
})
export class Level20Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '2.0';

  model: any;
  modelDebug = {
    level: '2.0',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-27',
    '20-1': 'A',
    '20-2': 'B',
    '20-3': 'C',
    '20-4': 'D',
    '20-5': 'A',
    '20-6': 'A',
    '20-7': 'A',
    '20-8': 'A',
    '20-9': 'A',
    '20-10': 'A',
    evaluatorname: 'Chandra',
    evaluatoremail: 'fuji.nguyen@workcontrol.com',
    Notes: 'Lefty user',
    terms: true,
  };
  modelInit = { level: '2.0' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  show: boolean = false;

  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel20Service, private modalService: NgbModal) {
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
