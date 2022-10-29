import { Component, OnInit } from '@angular/core';
import { FormfieldLevel35Service } from '../../../services/formfield-level35.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal-component';

@Component({
  selector: 'app-level35',
  templateUrl: './level35.component.html',
  styleUrls: ['./level35.component.css'],
})
export class Level35Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '3.5';

  model: any;

  modelDebug = {
    level: '3.5',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-26',
    '35-1': 'A',
    '35-2': 'B',
    '35-3': 'C',
    '35-4': 'D',
    '35-5': 'A',
    '35-6': 'A',
    '35-7': 'A',
    '35-8': 'A',
    '35-9': 'A',
    '35-10': 'A',
    '35-11': 'A',
    '35-12': 'A',
    '35-13': 'A',
    '35-14': 'A',
    '35-15': 'A',
    '35-16': 'A',
    '35-17': 'A',
    '35-18': 'A',
    evaluatorname: 'Hieu Thi Nguyen',
    evaluatoremail: 'fuji.nguyen@workcontrol.com',
    terms: true,
  };
  modelInit = { level: '3.5' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  public show: boolean = false;

  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel35Service, private modalService: NgbModal) {
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
