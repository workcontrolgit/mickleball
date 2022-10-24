import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css'],
})
export class ReportcardComponent implements OnInit {
  state$: Observable<object>;
  @Input() model = {};

  constructor() {}

  ngOnInit() {}

  back() {
    // alert(JSON.stringify(this.model));
  }
}
