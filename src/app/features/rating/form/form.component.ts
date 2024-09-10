import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Logger } from '@core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, JsonPipe } from '@angular/common';
import { ReportcardComponent } from '../reportcard/reportcard.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

const log = new Logger('Evaluation');
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: true,
    imports: [
        NgbNav,
        NgbNavItem,
        NgbNavLink,
        NgbNavContent,
        EvaluationComponent,
        ReportcardComponent,
        NgbNavOutlet,
        NgIf,
        JsonPipe,
    ],
})
export class FormComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  skillLevel: string;
  // evaluation: Evaluation;
  // evaluations: Evaluation[];
  model: any;
  active: number;
  disabled = true;

  //options: FormlyFormOptions = {};
  //fields: FormlyFieldConfig[];

  debug: boolean = true;
  //level: any;

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

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.model = data.model;
      this.skillLevel = this.model['level'];
    });
  }

  selectTab(isValidForm: boolean) {
    this.active = 2;
    this.disabled = !isValidForm;
  }

  ngOnInit() {
    if (this.debug) {
      this.model = this.modelDebug;
    }
  }

  // CRUD > Read, map to REST/HTTP GET
  // read2(playerId: any, skillLevel: any): void {
  //   this.apiHttpService
  //     .get(this.apiEndpointsService.getEvaluationByPlayerIdAndSkillLevelEndpoint(playerId, skillLevel))
  //     .subscribe(
  //       //Assign resp to class-level model object.
  //       (resp: any) => {
  //         //Assign data to class-level model object.
  //         this.evaluations = resp.data;

  //         if (Array.isArray(this.evaluations) && this.evaluations.length) {
  //           var firstItem: any = this.evaluations.splice(0, 1)[0];
  //           this.model = JSON.parse(firstItem.result);
  //         }
  //       },
  //       (error) => {
  //         log.debug(error);
  //       }
  //     );
  // }

  // read(id: any): void {
  //   this.apiHttpService.get(this.apiEndpointsService.getEvaluationByIdEndpoint(id)).subscribe(
  //     //Assign resp to class-level model object.
  //     (resp: DataResponseEvaluation) => {
  //       //Assign data to class-level model object.
  //       this.evaluation = resp.data;
  //       this.model = JSON.parse(this.evaluation.result);
  //     },
  //     (error) => {
  //       log.debug(error);
  //     }
  //   );
  // }

  // get sub(): string | null {
  //   return this.authService.identityClaims ? (this.authService.identityClaims as any)['sub'] : null;
  // }
}
