import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormfieldSkillRatingService } from '@app/services/form/formfield-skillrating.service';
import { environment } from '@env/environment';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WarningDialogComponent } from '@app/@shared/components/warning-dialog/warning-dialog-component';
import { Evaluation } from '@shared/models/evaluation';
import { Logger } from '@core';
import { NgIf, JsonPipe } from '@angular/common';

const log = new Logger('Evaluation');
@Component({
    selector: 'app-evaluation',
    templateUrl: './evaluation.component.html',
    styleUrls: ['./evaluation.component.css'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormlyModule,
        NgIf,
        JsonPipe,
    ],
})
export class EvaluationComponent implements OnInit {
  // ngx formly
  form = new FormGroup({});
  //skillLevel = '4.0';
  evaluation: Evaluation;
  evaluations: Evaluation[];
  @Input() model: any;
  active = 1;

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  // show: boolean = false;
  debug: boolean = false;
  level: any;

  @Output() ValidEvaluationEvent = new EventEmitter<boolean>();

  constructor(private serviceFormFields: FormfieldSkillRatingService, private modalService: NgbModal) {}

  ngOnInit() {
    var skillLevel = this.model['level'];

    var instructions: string;

    switch (skillLevel) {
      case '2.0': {
        instructions = environment.evaluationInstruction.level20;
        break;
      }
      case '2.5': {
        instructions = environment.evaluationInstruction.level25;
        break;
      }
      case '3.0': {
        instructions = environment.evaluationInstruction.level30;
        break;
      }
      case '3.5': {
        instructions = environment.evaluationInstruction.level35;
        break;
      }
      case '4.0': {
        instructions = environment.evaluationInstruction.level40;
        break;
      }
      case '4.5': {
        instructions = environment.evaluationInstruction.level45;
        break;
      }
      case '5.0': {
        instructions = environment.evaluationInstruction.level50;
        break;
      }
      default: {
        instructions = 'undefined';
        break;
      }
    }

    //this.fields = this.serviceFormFields.getFormFields(skillLevel, instructions);
    this.fields = this.serviceFormFields.getFormFields(skillLevel);
  }

  submit() {
    if (this.form.invalid) {
      this.open();
    } else {
      this.ValidEvaluationEvent.emit(this.form.valid);
    }
  }

  open() {
    const modalRef = this.modalService.open(WarningDialogComponent);
    //modalRef.componentInstance.title = "Uh oh";
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
