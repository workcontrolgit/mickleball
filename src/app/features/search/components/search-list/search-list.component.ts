// search-list.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { Video } from '@shared/models/search.interface';
import { Logger } from '@core';

const log = new Logger('search-list');

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
})
export class SearchListComponent implements OnInit {
  @Input() videos: Video[];
  debug: boolean = true;

  constructor() {}

  ngOnInit() {
    log.debug(this.videos);
  }
}
