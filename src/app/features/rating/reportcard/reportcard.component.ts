import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormfieldControlService } from '@app/services/formfield-control.service';

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css'],
})
export class ReportcardComponent implements OnInit {
  state$: Observable<object>;
  @Input() model: any = {};

  //myObjArray: any = [];

  objSkillRating: any = [];

  constructor(private formfieldControlService: FormfieldControlService) {}

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
      skillcode = objSkillByLevel[i].Skillcode;
      description = objSkillByLevel[i].Description;

      evalString = "this.model['" + skillcode + "']";
      rating = eval("this.model['" + skillcode + "']");

      this.objSkillRating.push({
        Skillcode: skillcode,
        Description: description,
        Rating: rating,
      });
    }
  }
}
