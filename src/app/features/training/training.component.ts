import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-search',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Search load');
  }
}
