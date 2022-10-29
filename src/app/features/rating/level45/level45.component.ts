import { Component, OnInit } from '@angular/core';
import { FormfieldLevel45Service } from '../../../services/formfield-level45.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal-component';

@Component({
  selector: 'app-level45',
  templateUrl: './level45.component.html',
  styleUrls: ['./level45.component.css'],
})
export class Level45Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '4.5';

  model: any;
  modelDebug = {
    level: '4.5',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-26',
    '45-1': 'A',
    '45-2': 'B',
    '45-3': 'C',
    '45-4': 'D',
    '45-5': 'A',
    '45-6': 'A',
    '45-7': 'A',
    '45-8': 'A',
    '45-9': 'A',
    '45-10': 'A',
    '45-11': 'A',
    '45-12': 'A',
    '45-13': 'A',
    '45-14': 'A',
    '45-15': 'A',
    '45-16': 'A',
    '45-17': 'A',
    '45-18': 'A',
    '45-19': 'A',
    evaluatorname: 'Hieu Thi Nguyen',
    evaluatoremail: 'fuji.nguyen@workcontrol.com',
    Notes: 'Lefty',
    terms: true,
  };
  modelInit = { level: '4.5' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  show: boolean = false;

  debug: boolean = false;

  constructor(serviceFormFields: FormfieldLevel45Service, private modalService: NgbModal) {
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
