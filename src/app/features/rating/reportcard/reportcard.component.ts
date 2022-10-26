import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const Skillcode40 = [
  { Skillcode: '40-1', Description: 'Consistently hits forehand with depth and control' },
  { Skillcode: '40-2', Description: 'Consistently hits backhand with depth and control' },
  { Skillcode: '40-3', Description: 'Consistently gets serve in with varying depth and speed' },
  { Skillcode: '40-4', Description: 'Consistently gets return of serve in with varying depth and speed' },
  { Skillcode: '40-5', Description: 'Consistent and dependable overheads (directional control, depth and placement)' },
  { Skillcode: '40-6', Description: 'Accurate in placing lobs' },
  { Skillcode: '40-7', Description: 'Able to sustain dink rally with control, height and depth of shot' },
  { Skillcode: '40-8', Description: 'Understands which balls are attackable and those that are not in a dink rally' },
  { Skillcode: '40-9', Description: 'Sustains a dink exchange with patience at the net to elicit a “put away” shot' },
  { Skillcode: '40-10', Description: 'Consistently executes 3rd shot drop from the baseline to approach the net' },
  { Skillcode: '40-11', Description: 'Able to change soft shots to power shots to create an advantage' },
  { Skillcode: '40-12', Description: 'Able to volley a variety of shots at varying speeds' },
  { Skillcode: '40-13', Description: 'Able to block and return fast, hard volleys' },
  { Skillcode: '40-14', Description: 'Able to control NVZ (non-volley zone) keeping their opponents back' },
  { Skillcode: '40-15', Description: 'Aware of partners position on the court and moves as a team' },
  { Skillcode: '40-16', Description: 'Solid understanding of stacking and when and how it can be used effectively' },
  { Skillcode: '40-17', Description: 'Demonstrates ability to change position in an offensive manner (switching)' },
  { Skillcode: '40-18', Description: 'Demonstrates a broad knowledge of the rules of the game' },
  { Skillcode: '40-19', Description: 'Has a moderate number of unforced errors per game' },
  { Skillcode: '40-20', Description: 'Can identify opponents’ weaknesses and formulate plan to attack weaknesses' },
  { Skillcode: '40-21', Description: 'Plays competitively in tournaments' },
  { Skillcode: '40-22', Description: 'Has good mobility, quickness, and hand-eye coordination' },
];

const Skillcode35 = [
  { Skillcode: '35-1', Description: 'Able to use a forehand with moderate level of shot control' },
  { Skillcode: '35-2', Description: 'Able to use a backhand with moderate level of shot control' },
  { Skillcode: '35-3', Description: 'Consistently gets serve in' },
  { Skillcode: '35-4', Description: 'Consistently gets return of serve in' },
  { Skillcode: '35-5', Description: 'Able to place serves deep in the court' },
  { Skillcode: '35-6', Description: 'Able to place return of serves deep into the court' },
  { Skillcode: '35-7', Description: 'Able to dink and sustains medium length rallies' },
  { Skillcode: '35-8', Description: 'Able to control height/depth of dink shot' },
  { Skillcode: '35-9', Description: 'Understands variation of pace of dink shot' },
  { Skillcode: '35-10', Description: 'Able to hit a 3rd shot drop to gain advantage to the net' },
  { Skillcode: '35-11', Description: 'Able to volley with medium paced shots with control' },
  { Skillcode: '35-12', Description: 'Sustains a short volley session at the next with placement and control' },
  { Skillcode: '35-13', Description: 'Moves quickly to NVZ (non-volley zone) when opportunity is there' },
  { Skillcode: '35-14', Description: 'Understands proper court position' },
  { Skillcode: '35-15', Description: 'Understands difference b/w hard game and soft game and knows when to use it' },
  { Skillcode: '35-16', Description: 'Basic knowledge of stacking and knows when to use it' },
  { Skillcode: '35-17', Description: 'Able to sustain short rallies' },
  { Skillcode: '35-18', Description: 'Has good mobility, quickness, and hand-eye coordination' },
];

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

  constructor() {}

  ngOnInit() {
    // rating level 4.0
    var skillcode: string;
    var description: string;
    var rating: string;
    var evalString: string;

    if (this.model['level'] == '4.0') {
      for (let i = 0; i < Skillcode40.length; i++) {
        skillcode = Skillcode40[i].Skillcode;
        description = Skillcode40[i].Description;

        evalString = "this.model['skillcode" + skillcode + "']";
        rating = eval("this.model['skillcode" + skillcode + "']");

        this.objSkillRating.push({
          Skillcode: skillcode,
          Description: description,
          Rating: rating,
        });
      }
    }

    if (this.model['level'] == '3.5') {
      for (let i = 0; i < Skillcode35.length; i++) {
        skillcode = Skillcode35[i].Skillcode;
        description = Skillcode35[i].Description;

        evalString = "this.model['skillcode" + skillcode + "']";
        rating = eval("this.model['skillcode" + skillcode + "']");

        this.objSkillRating.push({
          Skillcode: skillcode,
          Description: description,
          Rating: rating,
        });
      }
    }
  }
}
