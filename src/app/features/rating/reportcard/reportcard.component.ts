import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormfieldControlService } from '@app/services/form/formfield-control.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type TypeSkillRating = Array<{ Skillcode: string; Description: string; Rating: string }>;

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css'],
})
export class ReportcardComponent implements OnInit {
  state$: Observable<object>;
  @Input() model: any = {};

  success: string = 'text-success fw-bolder';
  info: string = 'text-info fw-bolder';
  warning: string = 'text-warning fw-bolder';
  danger: string = 'text-danger fw-bolder';

  //myObjArray: any = [];

  objSkillRating: TypeSkillRating = [];
  previousUrl: string;

  constructor(private formfieldControlService: FormfieldControlService, private router: Router) {
    // this.model = this.router.getCurrentNavigation().extras.state;
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.previousUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();
    // console.log(this.router.getCurrentNavigation().previousNavigation.finalUrl.toString());
  }

  ngOnInit() {
    // rating level 4.0
    var objSkillByLevel: any;
    var skillcode: string;
    var description: string;
    var rating: string;
    var evalString: string;
    var filterLevel: string;

    filterLevel = this.model['level'];

    objSkillByLevel = this.formfieldControlService.LstSkillcode(filterLevel);

    for (let i = 0; i < objSkillByLevel.length; i++) {
      skillcode = objSkillByLevel[i].skillcode;
      description = objSkillByLevel[i].description;

      evalString = "this.model['" + skillcode + "']";
      rating = eval(evalString);

      this.objSkillRating.push({
        Skillcode: skillcode,
        Description: description,
        Rating: rating,
      });
    }
  }

  getClassOf(rating: string) {
    console.log(rating);
    if ((rating = 'A')) return 'text-success fw-bolder';
    else return 'text-danger fw-bolder';
  }
}
