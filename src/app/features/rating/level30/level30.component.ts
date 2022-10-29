import { Component, OnInit } from '@angular/core';
import { FormfieldLevel30Service } from '../../../services/formfield-level30.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal-component';

@Component({
  selector: 'app-level30',
  templateUrl: './level30.component.html',
  styleUrls: ['./level30.component.css'],
})
export class Level30Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '3.0';

  model: any;
  modelDebug = {
    level: '3.0',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-27',
    '30-1': 'A',
    '30-2': 'B',
    '30-3': 'C',
    '30-4': 'D',
    '30-5': 'A',
    '30-6': 'A',
    '30-7': 'A',
    '30-8': 'A',
    '30-9': 'A',
    '30-10': 'A',
    '30-11': 'A',
    evaluatorname: 'Hieu Thi Nguyen',
    evaluatoremail: 'fuji.nguyen@workcontrol.com',
    Notes: 'Lefty user',
    terms: true,
  };
  modelInit = { level: '3.0' };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  show: boolean = false;
  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel30Service, private modalService: NgbModal) {
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
