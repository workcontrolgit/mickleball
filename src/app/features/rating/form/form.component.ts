import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ApiHttpService } from '@app/services/api-http.service';
import { ApiEndpointsService } from '@app/services/api-endpoints.service';
import { DataResponseEvaluation } from '@shared/classes/data-response-evaluation';
import { Evaluation } from '@shared/models/evaluation';
import { Logger } from '@core';
import { AuthService } from '@core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

const log = new Logger('Evaluation');
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  skillLevel = '4.0';
  evaluation: Evaluation;
  evaluations: Evaluation[];
  model: any;
  active = 1;

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  debug: boolean = false;
  level: any;

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.model = data.model;
      this.skillLevel = this.model['level'];
    });

    // const state = this.router.getCurrentNavigation().extras.state;
    // this.model = state;
    // this.skillLevel = this.model['level'];
    // console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    // https://www.geekstrick.com/pass-data-from-routes-to-components-in-angular/
    // this.activatedRoute.data.subscribe((data) => {
    //   console.log(data);
    //   this.model = data.model;
    //   this.skillLevel = this.model['level'];
    // });
    // var instructions: string;
    // switch (this.skillLevel) {
    //   case '2.0': {
    //     instructions = environment.Evaluation_Instruction.Level_20;
    //     break;
    //   }
    //   case '2.5': {
    //     instructions = environment.Evaluation_Instruction.Level_25;
    //     break;
    //   }
    //   case '3.0': {
    //     instructions = environment.Evaluation_Instruction.Level_30;
    //     break;
    //   }
    //   case '3.5': {
    //     instructions = environment.Evaluation_Instruction.Level_35;
    //     break;
    //   }
    //   case '4.0': {
    //     instructions = environment.Evaluation_Instruction.Level_40;
    //     break;
    //   }
    //   case '4.5': {
    //     instructions = environment.Evaluation_Instruction.Level_45;
    //     break;
    //   }
    //   case '5.0': {
    //     instructions = environment.Evaluation_Instruction.Level_50;
    //     break;
    //   }
    //   default: {
    //     instructions = 'undefined';
    //     break;
    //   }
    // }
    // this.fields = this.serviceFormFields.getFormFields(this.skillLevel, instructions);
    // get login user
    // this.read(this.sub);
    // if (this.authService.hasValidToken()) {
    //   this.read2(this.sub, this.skillLevel);
    // }
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
}
