import { Component, OnInit } from '@angular/core';
import { FormfieldLevel40Service } from '@app/services/formfield-level40.service';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal-component';
import { ApiHttpService } from '@app/services/api-http.service';
import { ApiEndpointsService } from '@app/services/api-endpoints.service';
import { DataResponsePosition } from '@shared/classes/data-response-position';
import { DataResponseEvaluation } from '@shared/classes/data-response-evaluation';
import { Evaluation } from '@shared/models/evaluation';
import { Logger } from '@core';

import { AuthService } from '@app/@core/auth/auth.service';
import { Observable } from 'rxjs';

const log = new Logger('Evaluation');

@Component({
  selector: 'app-level40',
  templateUrl: './level40.component.html',
  styleUrls: ['./level40.component.css'],
})
export class Level40Component implements OnInit {
  // ngx formly
  form = new FormGroup({});
  ratinglevel = '4.0';
  evaluation: Evaluation;

  evaluations: Evaluation[];

  isAuthenticated: Observable<boolean>;

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
  debug: boolean = true;

  constructor(
    private serviceFormFields: FormfieldLevel40Service,
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private modalService: NgbModal,
    private authService: AuthService
  ) {
    this.isAuthenticated = authService.isAuthenticated$;
  }

  ngOnInit() {
    this.fields = this.serviceFormFields.getFormFields();

    // get login user
    // this.read(this.sub);
    if (this.authService.hasValidToken()) {
      this.read2(this.sub, this.ratinglevel);
    }
  }

  // CRUD > Read, map to REST/HTTP GET
  read2(playerId: any, skillLevel: any): void {
    this.apiHttpService
      .get(this.apiEndpointsService.getEvaluationByPlayerIdAndSkillLevelEndpoint(playerId, skillLevel))
      .subscribe(
        //Assign resp to class-level model object.
        (resp: any) => {
          //Assign data to class-level model object.
          this.evaluations = resp.data;

          if (Array.isArray(this.evaluations) && this.evaluations.length) {
            var firstItem: any = this.evaluations.splice(0, 1)[0];
            this.model = JSON.parse(firstItem.result);
          }

          //   this.evaluations.forEach( (evaluation) => {
          //     this.model = JSON.parse(evaluation.result);
          // });

          // log.debug(this.evaluations);
          // this.model = JSON.stringify(this.evaluations);
        },
        (error) => {
          log.debug(error);
        }
      );
  }

  read(id: any): void {
    this.apiHttpService.get(this.apiEndpointsService.getEvaluationByIdEndpoint(id)).subscribe(
      //Assign resp to class-level model object.
      (resp: DataResponseEvaluation) => {
        //Assign data to class-level model object.
        this.evaluation = resp.data;
        this.model = JSON.parse(this.evaluation.result);
      },
      (error) => {
        log.debug(error);
      }
    );
  }

  get sub(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['sub'] : null;
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
