import { Component, OnInit } from '@angular/core';
import { FormfieldSkillRatingService } from '@app/services/formfield-skillrating.service';
import { environment } from '@env/environment';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '@app/@shared/components/modal/modal-component';
import { ApiHttpService } from '@app/services/api-http.service';
import { ApiEndpointsService } from '@app/services/api-endpoints.service';
import { DataResponseEvaluation } from '@shared/classes/data-response-evaluation';
import { Evaluation } from '@shared/models/evaluation';
import { Logger } from '@core';
import { AuthService } from '@core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const log = new Logger('Evaluation');
@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  skillLevel = '4.0';
  evaluation: Evaluation;
  evaluations: Evaluation[];
  model: any;
  active = 1;

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
  level: any;

  constructor(
    private serviceFormFields: FormfieldSkillRatingService,
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private modalService: NgbModal,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // const state = this.router.getCurrentNavigation().extras.state;
    // this.model = state;
    // this.skillLevel = this.model['level'];
    // console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    // https://www.geekstrick.com/pass-data-from-routes-to-components-in-angular/

    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.model = data.model;
      this.skillLevel = this.model['level'];
    });

    var instructions: string;

    switch (this.skillLevel) {
      case '2.0': {
        instructions = environment.Evaluation_Instruction.Level_20;
        break;
      }
      case '2.5': {
        instructions = environment.Evaluation_Instruction.Level_25;
        break;
      }
      case '3.0': {
        instructions = environment.Evaluation_Instruction.Level_30;
        break;
      }
      case '3.5': {
        instructions = environment.Evaluation_Instruction.Level_35;
        break;
      }
      case '4.0': {
        instructions = environment.Evaluation_Instruction.Level_40;
        break;
      }
      case '4.5': {
        instructions = environment.Evaluation_Instruction.Level_45;
        break;
      }
      case '5.0': {
        instructions = environment.Evaluation_Instruction.Level_50;
        break;
      }
      default: {
        instructions = 'undefined';
        break;
      }
    }

    this.fields = this.serviceFormFields.getFormFields(this.skillLevel, instructions);

    // get login user
    // this.read(this.sub);
    if (this.authService.hasValidToken()) {
      this.read2(this.sub, this.skillLevel);
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
    this.router.navigateByUrl('/rating/reportcard', { state: this.model });
    // if (this.form.valid) {
    //   this.show = !this.show;
    // } else {
    //   this.open();
    // }
  }
  toggle() {
    this.show = !this.show;
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }

  gotoDynamic() {
    this.router.navigateByUrl('/rating/reportcard', { state: this.model });
  }
}
