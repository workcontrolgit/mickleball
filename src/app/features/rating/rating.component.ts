import { Component, OnInit } from '@angular/core';

import { NgxPrintElementService } from 'ngx-print-element';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  constructor(public print: NgxPrintElementService) {}
  ngOnInit(): void {}
}
