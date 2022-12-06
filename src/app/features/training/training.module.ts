import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';

import { TrainingComponent } from './training.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchContainerComponent } from './container/search-container/search-container.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [TrainingComponent, SearchInputComponent, SearchListComponent, SearchContainerComponent],
  imports: [CommonModule, YouTubePlayerModule, TrainingRoutingModule],
  providers: [],
})
export class TraininghModule {}
