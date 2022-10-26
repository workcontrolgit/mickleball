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

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css'],
})
export class ReportcardComponent implements OnInit {
  state$: Observable<object>;
  @Input() model: any = {};

  myObjArray: any = [];

  objSkillRating: any = [];

  constructor() {}

  ngOnInit() {
    // rating level 4.0
    var skillcode: string;
    var description: string;
    var rating: string;
    var evalString: string;

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

    if (this.model['level'] == '4.0') {
      this.myObjArray.push({
        Skillcode: '40-1',
        Description: 'Consistently hits forehand with depth and control',
        Rating: this.model['skillcode40-1'],
      });
      this.myObjArray.push({
        Skillcode: '40-2',
        Description: 'Consistently hits backhand with depth and control',
        Rating: this.model['skillcode40-2'],
      });
      this.myObjArray.push({
        Skillcode: '40-3',
        Description: 'Consistently gets serve in with varying depth and speed',
        Rating: this.model['skillcode40-3'],
      });
      this.myObjArray.push({
        Skillcode: '40-4',
        Description: 'Consistently gets return of serve in with varying depth and speed',
        Rating: this.model['skillcode40-4'],
      });
      this.myObjArray.push({
        Skillcode: '40-5',
        Description: 'Consistent and dependable overheads (directional control, depth and placement)',
        Rating: this.model['skillcode40-5'],
      });
      this.myObjArray.push({
        Skillcode: '40-6',
        Description: 'Accurate in placing lobs',
        Rating: this.model['skillcode40-6'],
      });
      this.myObjArray.push({
        Skillcode: '40-7',
        Description: 'Able to sustain dink rally with control, height and depth of shot',
        Rating: this.model['skillcode40-7'],
      });
      this.myObjArray.push({
        Skillcode: '40-8',
        Description: 'Understands which balls are attackable and those that are not in a dink rally',
        Rating: this.model['skillcode40-8'],
      });
      this.myObjArray.push({
        Skillcode: '40-9',
        Description: 'Sustains a dink exchange with patience at the net to elicit a “put away” shot',
        Rating: this.model['skillcode40-9'],
      });
      this.myObjArray.push({
        Skillcode: '40-10',
        Description: 'Consistently executes 3rd shot drop from the baseline to approach the net',
        Rating: this.model['skillcode40-10'],
      });
      this.myObjArray.push({
        Skillcode: '40-11',
        Description: 'Able to change soft shots to power shots to create an advantage',
        Rating: this.model['skillcode40-11'],
      });
      this.myObjArray.push({
        Skillcode: '40-12',
        Description: 'Able to volley a variety of shots at varying speeds',
        Rating: this.model['skillcode40-12'],
      });
      this.myObjArray.push({
        Skillcode: '40-13',
        Description: 'Able to block and return fast, hard volleys',
        Rating: this.model['skillcode40-13'],
      });
      this.myObjArray.push({
        Skillcode: '40-14',
        Description: 'Able to control NVZ (non-volley zone) keeping their opponents back',
        Rating: this.model['skillcode40-14'],
      });
      this.myObjArray.push({
        Skillcode: '40-15',
        Description: 'Aware of partners position on the court and moves as a team',
        Rating: this.model['skillcode40-15'],
      });
      this.myObjArray.push({
        Skillcode: '40-16',
        Description: 'Solid understanding of stacking and when and how it can be used effectively',
        Rating: this.model['skillcode40-16'],
      });
      this.myObjArray.push({
        Skillcode: '40-17',
        Description: 'Demonstrates ability to change position in an offensive manner (switching)',
        Rating: this.model['skillcode40-17'],
      });
      this.myObjArray.push({
        Skillcode: '40-18',
        Description: 'Demonstrates a broad knowledge of the rules of the game',
        Rating: this.model['skillcode40-18'],
      });
      this.myObjArray.push({
        Skillcode: '40-19',
        Description: 'Has a moderate number of unforced errors per game',
        Rating: this.model['skillcode40-19'],
      });
      this.myObjArray.push({
        Skillcode: '40-20',
        Description: 'Can identify opponents’ weaknesses and formulate plan to attack weaknesses',
        Rating: this.model['skillcode40-20'],
      });
      this.myObjArray.push({
        Skillcode: '40-21',
        Description: 'Plays competitively in tournaments',
        Rating: this.model['skillcode40-21'],
      });
      this.myObjArray.push({
        Skillcode: '40-22',
        Description: 'Has good mobility, quickness, and hand-eye coordination',
        Rating: this.model['skillcode40-22'],
      });
    }
  }
}
