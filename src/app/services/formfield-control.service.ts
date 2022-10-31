import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

type TypeLabelValue = Array<{ label: string; value: string }>;

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  public readonly SelectRatingPlaceholder: string = 'Select a rating';

  public readonly TableRatingCode = [
    { Ratingcode: 'A', Description: 'Solid, consistent performance' },
    { Ratingcode: 'B', Description: 'Good basic form, but needs work' },
    { Ratingcode: 'C', Description: 'Attempted but very poorly executed/needs work' },
    { Ratingcode: 'D', Description: 'Not observed or not able to execute' },
  ];

  GetRatingList(): TypeLabelValue {
    var lstRating: TypeLabelValue = [];

    for (let i = 0; i < this.TableRatingCode.length; i++) {
      lstRating.push({
        label: this.TableRatingCode[i].Ratingcode,
        value: this.TableRatingCode[i].Ratingcode,
      });
    }
    return lstRating;
  }

  public readonly TableSkillCode = [
    {
      Skillcode: '20-1',
      Description: 'Minimal understanding of the basic rules of the game i.e 2 bounce rule',
      Level: '2.0',
    },
    { Skillcode: '20-2', Description: 'Know how to keep score', Level: '2.0' },
    { Skillcode: '20-3', Description: 'Demonstrate a forehand', Level: '2.0' },
    { Skillcode: '20-4', Description: 'Demonstrate a backhand', Level: '2.0' },
    { Skillcode: '20-5', Description: 'Demonstrate a volley', Level: '2.0' },
    { Skillcode: '20-6', Description: 'Accurately place serve into the correct square', Level: '2.0' },
    { Skillcode: '20-7', Description: 'Know where to stand when serving and returning serve', Level: '2.0' },
    { Skillcode: '20-8', Description: 'Have good mobility moving in a safe and balanced manner', Level: '2.0' },
    { Skillcode: '20-9', Description: 'Have good quickness', Level: '2.0' },
    { Skillcode: '20-10', Description: 'Have good hand-eye coordination', Level: '2.0' },
    { Skillcode: '25-1', Description: 'Know the basic rules of the game including the 2 bounce rule', Level: '2.5' },
    { Skillcode: '25-2', Description: 'Able to hit a forehand with direction', Level: '2.5' },
    { Skillcode: '25-3', Description: 'Able to hit a backhand with direction', Level: '2.5' },
    {
      Skillcode: '25-4',
      Description: 'Accurately place serve into correct square focusing on direction',
      Level: '2.5',
    },
    { Skillcode: '25-5', Description: 'Able to sustain a dink rally with players of equal ability', Level: '2.5' },
    { Skillcode: '25-6', Description: 'Able to volley with some direction', Level: '2.5' },
    { Skillcode: '25-7', Description: 'Understand the fundamentals of the game', Level: '2.5' },
    { Skillcode: '25-8', Description: 'Understand proper court positioning', Level: '2.5' },
    { Skillcode: '25-9', Description: 'Able to accurately keep score throughout the game', Level: '2.5' },
    { Skillcode: '25-10', Description: 'Have good mobility moving in a safe and balanced manner', Level: '2.5' },
    { Skillcode: '25-11', Description: 'Have good quickness', Level: '2.5' },
    { Skillcode: '25-12', Description: 'Have good hand-eye coordination', Level: '2.5' },
    {
      Skillcode: '30-1',
      Description: 'Able to hit a medium paced forehand with direction and consistency',
      Level: '3.0',
    },
    {
      Skillcode: '30-2',
      Description: 'Able to hit a medium paced backhand with direction and consistency',
      Level: '3.0',
    },
    {
      Skillcode: '30-3',
      Description: 'Able to hit a medium paced serve with depth, direction and consistency',
      Level: '3.0',
    },
    { Skillcode: '30-4', Description: 'Able to consistently sustain a dink rally with control', Level: '3.0' },
    { Skillcode: '30-5', Description: 'Able to hit a medium paced 3rd shot with direction', Level: '3.0' },
    {
      Skillcode: '30-6',
      Description: 'Able to hit a medium paced volley with direction and consistency',
      Level: '3.0',
    },
    { Skillcode: '30-7', Description: 'Understand the fundamentals of the game', Level: '3.0' },
    { Skillcode: '30-8', Description: 'Understand proper court positioning', Level: '3.0' },
    { Skillcode: '30-9', Description: 'Understand rules and can keep score', Level: '3.0' },
    { Skillcode: '30-10', Description: 'Have good mobility, quickness, and hand-eye coordination', Level: '3.0' },
    { Skillcode: '30-11', Description: 'Have started playing in tournaments', Level: '3.0' },
    { Skillcode: '35-1', Description: 'Able to use a forehand with moderate Level of shot control', Level: '3.5' },
    { Skillcode: '35-2', Description: 'Able to use a backhand with moderate Level of shot control', Level: '3.5' },
    { Skillcode: '35-3', Description: 'Consistently get serve in', Level: '3.5' },
    { Skillcode: '35-4', Description: 'Consistently get return of serve in', Level: '3.5' },
    { Skillcode: '35-5', Description: 'Able to place serves deep in the court', Level: '3.5' },
    { Skillcode: '35-6', Description: 'Able to place return of serves deep into the court', Level: '3.5' },
    { Skillcode: '35-7', Description: 'Able to dink and sustains medium length rallies', Level: '3.5' },
    { Skillcode: '35-8', Description: 'Able to control height and depth of dink shot', Level: '3.5' },
    { Skillcode: '35-9', Description: 'Understand variation of pace of dink shot', Level: '3.5' },
    { Skillcode: '35-10', Description: 'Able to hit a 3rd shot drop to gain advantage to the net', Level: '3.5' },
    { Skillcode: '35-11', Description: 'Able to volley with medium paced shots with control', Level: '3.5' },
    {
      Skillcode: '35-12',
      Description: 'Sustain a short volley session at the next with placement and control',
      Level: '3.5',
    },
    {
      Skillcode: '35-13',
      Description: 'Move quickly to NVZ (non-volley zone, aka kitchen) when opportunity is there',
      Level: '3.5',
    },
    { Skillcode: '35-14', Description: 'Understand proper court position', Level: '3.5' },
    {
      Skillcode: '35-15',
      Description: 'Understand difference between hard game and soft game and knows when to use it',
      Level: '3.5',
    },
    { Skillcode: '35-16', Description: 'Basic knowledge of stacking and knows when to use it', Level: '3.5' },
    { Skillcode: '35-17', Description: 'Able to sustain short rallies', Level: '3.5' },
    { Skillcode: '35-18', Description: 'Have good mobility, quickness, and hand-eye coordination', Level: '3.5' },
    { Skillcode: '40-1', Description: 'Consistently hit forehand with depth and control', Level: '4.0' },
    { Skillcode: '40-2', Description: 'Consistently hit backhand with depth and control', Level: '4.0' },
    { Skillcode: '40-3', Description: 'Consistently get serve in with varying depth and speed', Level: '4.0' },
    {
      Skillcode: '40-4',
      Description: 'Consistently get return of serve in with varying depth and speed',
      Level: '4.0',
    },
    {
      Skillcode: '40-5',
      Description: 'Consistent and dependable overheads (directional control, depth and placement)',
      Level: '4.0',
    },
    { Skillcode: '40-6', Description: 'Accurate in placing lobs', Level: '4.0' },
    {
      Skillcode: '40-7',
      Description: 'Able to sustain dink rally with control, height and depth of shot',
      Level: '4.0',
    },
    {
      Skillcode: '40-8',
      Description: 'Understand which balls are attackable and those that are not in a dink rally',
      Level: '4.0',
    },
    {
      Skillcode: '40-9',
      Description: 'Sustains a dink exchange with patience at the net to elicit a “put away” shot',
      Level: '4.0',
    },
    {
      Skillcode: '40-10',
      Description: 'Consistently execute 3rd shot drop from the baseline to approach the net',
      Level: '4.0',
    },
    {
      Skillcode: '40-11',
      Description: 'Able to change soft shots to power shots to create an advantage',
      Level: '4.0',
    },
    { Skillcode: '40-12', Description: 'Able to volley a variety of shots at varying speeds', Level: '4.0' },
    { Skillcode: '40-13', Description: 'Able to block and return fast, hard volleys', Level: '4.0' },
    {
      Skillcode: '40-14',
      Description: 'Able to control NVZ (non-volley zone) keeping their opponents back',
      Level: '4.0',
    },
    { Skillcode: '40-15', Description: 'Aware of partners position on the court and moves as a team', Level: '4.0' },
    {
      Skillcode: '40-16',
      Description: 'Solid understanding of stacking and when and how it can be used effectively',
      Level: '4.0',
    },
    {
      Skillcode: '40-17',
      Description: 'Demonstrate ability to change position in an offensive manner (switching)',
      Level: '4.0',
    },
    { Skillcode: '40-18', Description: 'Demonstrate a broad knowledge of the rules of the game', Level: '4.0' },
    { Skillcode: '40-19', Description: 'Have a moderate number of unforced errors per game', Level: '4.0' },
    {
      Skillcode: '40-20',
      Description: 'Can identify opponents’ weaknesses and formulate plan to attack weaknesses',
      Level: '4.0',
    },
    { Skillcode: '40-21', Description: 'Play competitively in tournaments', Level: '4.0' },
    { Skillcode: '40-22', Description: 'Have good mobility, quickness, and hand-eye coordination', Level: '4.0' },
    { Skillcode: '45-1', Description: 'Consistently controls and place serves and return of serves', Level: '4.5' },
    {
      Skillcode: '45-2',
      Description: 'Serve with power accuracy and depth and can vary speed and spin of serve',
      Level: '4.5',
    },
    {
      Skillcode: '45-3',
      Description:
        'Consistent and dependable forehand groundstroke using pace and depth to generate opponent’s error to set up next shot',
      Level: '4.5',
    },
    {
      Skillcode: '45-4',
      Description: 'Can effectively/consistently direct the ball with the backhand, varying depth and pace',
      Level: '4.5',
    },
    {
      Skillcode: '45-5',
      Description:
        'Ability to place dink with high success at changing shot types while playing both consistently and with offensive intent',
      Level: '4.5',
    },
    { Skillcode: '45-6', Description: 'Recognizes and attempts to hit attackable dinks', Level: '4.5' },
    {
      Skillcode: '45-7',
      Description: 'Consistently execute effective 3rd shot strategies that are not easily returned',
      Level: '4.5',
    },
    { Skillcode: '45-8', Description: 'Able to intentionally and consistently place the 3rd shot drop', Level: '4.5' },
    {
      Skillcode: '45-9',
      Description: 'Able to block hard volleys directed at them and consistently drop them in NVZ',
      Level: '4.5',
    },
    {
      Skillcode: '45-10',
      Description: 'Comfortable hitting swinging volleys and hit overhead shots consistently as putaways',
      Level: '4.5',
    },
    { Skillcode: '45-11', Description: 'Poaches effectively', Level: '4.5' },
    {
      Skillcode: '45-12',
      Description: 'Have effective lobs and creates coverage gaps and hit to these gaps consistently',
      Level: '4.5',
    },
    {
      Skillcode: '45-13',
      Description: 'Have good footwork and moves laterally, forward and backward well',
      Level: '4.5',
    },
    { Skillcode: '45-14', Description: 'Very comfortable playing at the NVZ', Level: '4.5' },
    {
      Skillcode: '45-15',
      Description: 'Communicates and moves well with partner – easily “stacks” court positions',
      Level: '4.5',
    },
    {
      Skillcode: '45-16',
      Description:
        'Understand strategy and can adjust style of play and game plan according to the opponent’s strengths and weaknesses and court position',
      Level: '4.5',
    },
    { Skillcode: '45-17', Description: 'Limited number of unforced errors', Level: '4.5' },
    { Skillcode: '45-18', Description: 'Have good mobility and quickness', Level: '4.5' },
    { Skillcode: '45-19', Description: 'Have good hand-eye coordination', Level: '4.5' },
    {
      Skillcode: '50-1',
      Description: 'Have developed a very high level of variety, depth and pace of serves',
      Level: '5.0',
    },
    {
      Skillcode: '50-2',
      Description: 'Serve with power accuracy and depth and can vary speed and spin of serve',
      Level: '5.0',
    },
    {
      Skillcode: '50-3',
      Description:
        'Have a high level of accuracy and dependable forehand groundstroke using pace and depth to generate opponent’s error to set up next shot',
      Level: '5.0',
    },
    {
      Skillcode: '50-4',
      Description:
        'Have a high level of accuracy directing the ball with the backhand, varying depth and pace with control to set up offensive situations',
      Level: '5.0',
    },
    {
      Skillcode: '50-5',
      Description: 'Have mastered the dink with shot placement and ability to move opponents',
      Level: '5.0',
    },
    {
      Skillcode: '50-6',
      Description: 'Exhibit patience during rallies with ability to create opportunities to attack using dinks',
      Level: '5.0',
    },
    { Skillcode: '50-7', Description: 'Increased ability to change the pace of dinks strategically', Level: '5.0' },
    {
      Skillcode: '50-8',
      Description:
        'Mastered the 3rd shot choices and strategies Able to drop and drive ball from both the forehand and backhand side with high level consistency',
      Level: '5.0',
    },
    { Skillcode: '50-9', Description: 'Able to intentionally and consistently place the 3rd shot drop', Level: '5.0' },
    {
      Skillcode: '50-10',
      Description: 'Able to block hard volleys directed at them and consistently drop them in NVZ',
      Level: '5.0',
    },
    { Skillcode: '50-11', Description: 'Places overheads with ease for winners', Level: '5.0' },
    { Skillcode: '50-12', Description: 'Able to volley shots toward opponent’s feet consistently', Level: '5.0' },
    {
      Skillcode: '50-13',
      Description:
        'Comfortable with swinging volley in both initiating and ability to attack back or neutralize return',
      Level: '5.0',
    },
    {
      Skillcode: '50-14',
      Description: 'Efficient footwork and effective use of weight transfer for improved quickness on court',
      Level: '5.0',
    },
    {
      Skillcode: '50-15',
      Description:
        'Easily and quickly adjust style of play and game plan according to the opponent’s strengths and weaknesses and court position',
      Level: '5.0',
    },
    { Skillcode: '50-16', Description: 'Rarely makes unforced errors', Level: '5.0' },
    { Skillcode: '50-17', Description: 'Have good mobility, quickness, and hand-eye coordination', Level: '5.0' },
  ];

  public readonly GeneralFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="alert alert-warning"><h4>Section 1 - Player Information</h4></div>',
    },
    {
      key: 'playername',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter player name',
        required: true,
      },
    },
    {
      key: 'playeremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter player email',
        required: true,
      },
      validators: {
        validation: [this.EmailValidator],
      },
    },
    {
      key: 'assessmentDate',
      type: 'input',
      templateOptions: {
        label: 'Assessment Date',
        placeholder: 'Enter date',
        required: true,
        type: 'date',
      },
    },
  ];

  public readonly SummaryFields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<div class="alert alert-info"><h4>Section 3 - Evaluator Information</h4></div>',
    },
    {
      key: 'evaluatorname',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter evaluator name',
        required: true,
      },
    },
    {
      key: 'evaluatoremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter evaluator email',
        required: true,
      },
      validators: {
        validation: [this.EmailValidator],
      },
    },
    {
      key: 'Notes',
      type: 'textarea',
      props: {
        label: 'Assessment Notes',
        placeholder: 'enter any notes about the assessment here',
        rows: 5,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'I hereby declare that the assessment is true and correct to the best of my knowledge.',
        required: true,
        pattern: 'true',
        defaultValue: false,
      },
    },
  ];

  EmailValidator(control: FormControl | any): ValidationErrors | null {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      control.value
    )
      ? null
      : { email: true };
  }

  EmailValidatorMessage(err: any, field: FormlyFieldConfig) {
    return `"${field?.formControl?.value}" is not a valid email address`;
  }

  LstSkillcode(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.TableSkillCode.filter((Skillcode: any) => Skillcode.Level.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
